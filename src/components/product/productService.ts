import createError from 'http-errors';
import Products from '../../models/Products';
import { IProductBody, IProduct } from './productInterface';

class ProductService {
  async createProduct({
    name,
    category,
    description,
  }: IProductBody): Promise<IProduct> {
    const product = await Products.query().insert({
      name,
      category,
      description,
    });

    return Products.query().findById(product.id);
  }

  async getProducts(): Promise<IProduct[]> {
    const products = await Products.query();

    if (products.length < 1) {
      throw createError(404, 'No products found');
    }
    const category = 'VUL';
    const pro = await Products.query().where({ category });

    const updatedProduct = await Products.query().patchAndFetchById(pro[0].id, {
      clientQuoteCount: 1,
    });

    console.log(updatedProduct);

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

  async getProductByCategory(category: string): Promise<IProduct[]> {
    const products = await Products.query().where({ category });

    if (products.length < 1) {
      throw createError(404, 'No products found');
    }

    return products;
  }
}

export default ProductService;
