import express from 'express'
import ProductController from './components/product/productController'

const router = express.Router()

router.post('/api/product', ProductController.CreateProduct)

export default router