import express from 'express';
import ProductController from './components/product/productController';
import catchErrors from './utils/catchErrors';
import BenefitController from './components/benefit/benefitController';
import QuoteController from './components/qoute/quoteController';

const router = express.Router();

router.post('/api/product', catchErrors(ProductController.CreateProduct));
router.get('/api/products', catchErrors(ProductController.GetProducts));
router.put('/api/product/:id', catchErrors(ProductController.UpdateProduct));
router.get(
  '/api/products/:category',
  catchErrors(ProductController.GetProductByCategory),
);

router.post('/api/benefit', catchErrors(BenefitController.CreateBenefit));
router.get('/api/benefits', catchErrors(BenefitController.GetBenefits));

router.post('/api/quote', catchErrors(QuoteController.createQuoteForNewClient));

export default router;
