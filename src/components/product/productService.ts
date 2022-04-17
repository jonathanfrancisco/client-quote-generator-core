import Products from '../../models/Products';
import { IProductBody, IProduct } from './productInterface';
import createError from 'http-errors';

class ProductService {
  constructor() {}

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

    return await Products.query().findById(product.id);
  }

  async getProducts(): Promise<IProduct[]> {
    const products = await Products.query();

    if (products.length < 1) {
      throw createError(404, 'No products found');
    }

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
