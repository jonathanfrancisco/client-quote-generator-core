import Products from '../../models/Products'
import {IProductBody, IProduct} from './productInterface'

class ProductService {
    constructor() {}

    async createProduct({name, category, description}: IProductBody): Promise<IProduct> {

        const product = await Products.query().insert({
            name,
            category,
            description
        })

        return await Products.query().findById(product.id)
    }

    async getProducts(): Promise<IProduct[]> {
        const products = await Products.query()

        //add error handling

        return products
    }
}

export default ProductService