import {NextFunction, Request, Response} from 'express'
import ProductService from './productService'

const productService = new ProductService()

export default {
    
    CreateProduct: async (req: any, res: Response, next: NextFunction) => {
        try{

            const product = await productService.createProduct(req.body);
    
            return res.json({
                message: "Created Successfully",
                result: product
            })
        } catch(err) {
            next(err);
        }
       
    },
    GetProducts: async (req: any, res: Response, next: NextFunction) => {
        try {

            const products = await productService.getProducts()

            return res.json({
                message: "Fetched Successfully",
                result: products
            })
        }catch(err){
            next(err)
        }
    },
    UpdateProduct: async (req: any, res: Response, next: NextFunction) => {
        try {

            const updatedProduct = await productService.updateProduct(req.params.id, req.body)

            return res.json({
                message: "Updated Successfully",
                results: updatedProduct
            })

        }catch (err) {
            next(err)
        }
    },
    GetProductByCategory: async (req: any, res: Response, next: NextFunction) => {
        try {

            const getProducts = await productService.getProductByCategory(req.params.category)

            return res.json({
                message: "Fetched Successfully",
                results: getProducts
            })
        }catch (err) {
            next(err)
        }
    }
}