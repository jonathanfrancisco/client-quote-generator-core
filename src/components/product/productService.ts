import createError from 'http-errors';
import Products from '../../models/Products';
import {
  IProductBody,
  IProduct,
  IProductWithoutBenefit,
} from './productInterface';
import ProductBenefits from '../../models/ProductBenefits';

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

    return {
      ...product,
      productBenefits: await ProductBenefits.query().where(
        'productId',
        product.id,
      ),
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

    return {
      ...product,
      productBenefits: await ProductBenefits.query()
        .where('productId', product.id)
        .withGraphFetched('benefits'),
    };
  }
}

export default ProductService;
