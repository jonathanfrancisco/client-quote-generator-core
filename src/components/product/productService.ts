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

    return products;
  }
}

export default ProductService;
