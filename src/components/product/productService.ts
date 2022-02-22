import Products from '../../models/Products'
import IProductBody from './productInterface'

class ProductService {
    constructor() {}

    async createProduct({name, category, description}: IProductBody) {
        //add enum for category
        const product = await Products.query().insert({
            name,
            category,
            description
        })

        return {
            result: await Products.query().findById(product.id)
        }
    }
}

export default ProductService