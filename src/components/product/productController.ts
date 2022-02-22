import {Request, Response} from 'express'
import ProductService from './productService'

export default {

    CreateProduct: async (req: any, res: Response) => {
        const productService = new ProductService();

        const product = await productService.createProduct(req.body);

        return res.json({
            message: "Successfully Created",
            result: product.result
        })
    }
}