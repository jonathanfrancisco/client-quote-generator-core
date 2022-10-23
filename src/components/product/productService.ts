import createError from 'http-errors';
import Products from '../../models/Products';
import {
  IProductBody,
  IProduct,
  IProductWithoutBenefit,
} from './productInterface';
import ProductBenefits from '../../models/ProductBenefits';
import Benefits from '../../models/Benefits';

class ProductService {
  async createProduct({
    name,
    category,
    description,
    benefits,
  }: IProductBody): Promise<IProduct> {
    const product = await Products.query().insert({
      name,
      category,
      description,
    });

    await Promise.all(
      benefits.map(async (benefit) => {
        await ProductBenefits.query().insert({
          type: benefit.type,
          productId: product.id,
          benefitId: benefit.benefitId,
        });
      }),
    );

    const productBenefits = await ProductBenefits.query()
      .where('productId', product.id)
      .withGraphFetched('benefits');

    const mapProductBenefits = [];

    await Promise.all(
      productBenefits.map(async (benefit) => {
        const bene = await Benefits.query().findById(benefit.benefitId);
        const benefitDetails = {
          benefitId: benefit.benefitId,
          type: benefit.type,
          benefitName: bene.name,
          value: bene.value,
        };
        mapProductBenefits.push(benefitDetails);
      }),
    );

    return {
      ...product,
      productBenefits: mapProductBenefits,
    };
  }

  async getProducts(): Promise<IProductWithoutBenefit[]> {
    const products = await Products.query();

    return products;
  }

  async updateProduct(
    id: string,
    { name, category, description }: IProductBody,
  ) {
    const product = await Products.query().findOne({ id });

    if (product == null) {
      throw createError(404, 'No product found');
    }

    const updatedProduct = await Products.query().patchAndFetchById(id, {
      name,
      category,
      description,
    });

    return updatedProduct;
  }

  async getProductByCategory(
    category: string,
  ): Promise<IProductWithoutBenefit[]> {
    const products = await Products.query().where({ category });

    return products;
  }

  async getProductById(id: string): Promise<IProduct> {
    const product = await Products.query().findById(id);

    const res = await Products.query()
      .withGraphFetched('benefits')
      .findOne('id', product.id);

    const productBenefits = await ProductBenefits.query()
      .where('productId', product.id)
      .withGraphFetched('benefits');

    const defaultBenefit = await Benefits.query().where('defaultBenefit', true);

    const mapProductBenefits = [];
    const mapDefaultBenefits = [];

    await Promise.all(
      productBenefits.map(async (benefit) => {
        const bene = await Benefits.query().findById(benefit.benefitId);
        const benefitDetails = {
          benefitId: benefit.benefitId,
          type: benefit.type,
          benefitName: bene.name,
          value: bene.value,
        };
        mapProductBenefits.push(benefitDetails);
      }),
    );

    await Promise.all(
      defaultBenefit.map(async (benefit) => {
        const benefitDetails = {
          benefitId: benefit.id,
          type: benefit.type,
          benefitName: benefit.name,
          value: benefit.value,
        };
        mapDefaultBenefits.push(benefitDetails);
      }),
    );

    const mergeBenefit = mapProductBenefits.concat(mapDefaultBenefits);

    const seen = new Set();
    const benefits = mergeBenefit.filter((el) => {
      const duplicate = seen.has(el.benefitId);
      seen.add(el.benefitId);
      return !duplicate;
    });

    return {
      ...product,
      productBenefits: benefits,
    };
  }
}

export default ProductService;
