import { NextFunction, Request, Response } from 'express';
import ProductService from './productService';

const productService = new ProductService();

export default {
  CreateProduct: async (req: Request, res: Response, next: NextFunction) => {
    const product = await productService.createProduct(req.body);

    return res.json({
      message: 'Created Successfully',
      result: product,
    });
  },
  GetProducts: async (req: Request, res: Response, next: NextFunction) => {
    const products = await productService.getProducts();

    return res.json({
      message: 'Fetched Successfully',
      result: products,
    });
  },
  UpdateProduct: async (req: Request, res: Response, next: NextFunction) => {
    const updatedProduct = await productService.updateProduct(
      req.params.id,
      req.body,
    );

    return res.json({
      message: 'Updated Successfully',
      results: updatedProduct,
    });
  },
  GetProductByCategory: async (req: Request, res: Response) => {
    const getProducts = await productService.getProductByCategory(
      req.params.category,
    );

    return res.json({
      message: 'Fetched Successfully',
      results: getProducts,
    });
  },
  GetProductById: async (req: Request, res: Response) => {
    const product = await productService.getProductById(req.params.id);

    return res.json({
      message: 'Fetched Successfully',
      results: product,
    });
  },
};
