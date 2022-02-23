import {NextFunction, Request, Response} from 'express'
import ProductService from './productService'

const productService = new ProductService()

export default {
    
    CreateProduct: async (req: any, res: Response, next: NextFunction) => {
        try{

            const product = await productService.createProduct(req.body);
    
            return res.json({
                message: "Successfully Created",
                result: product
            })
        } catch(err) {
            next(err);
        }
       
    },
    getProducts: async (req: any, res: Response, next: NextFunction) => {
        try {

            const products = await productService.getProducts()

            return res.json({
                message: "Successfully Fetched",
                result: products
            })
        }catch(err){
            next(err)
        }
    }
}