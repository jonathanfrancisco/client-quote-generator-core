import express from 'express'
import ProductController from './components/product/productController'

const router = express.Router()

router.post('/api/product', ProductController.CreateProduct)
router.get('/api/products', ProductController.GetProducts)
router.put('/api/product/:id', ProductController.UpdateProduct)
router.get('/api/products/:category', ProductController.GetProductByCategory)

export default router