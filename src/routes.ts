import express from 'express';
import ProductController from './components/product/productController';
import catchErrors from './utils/catchErrors';
import BenefitController from './components/benefit/benefitController';
import QuoteController from './components/qoute/quoteController';
import ClientController from './components/client/clientController';

const router = express.Router();

router.post('/api/products', catchErrors(ProductController.CreateProduct));
router.get('/api/products', catchErrors(ProductController.GetProducts));
router.put('/api/products/:id', catchErrors(ProductController.UpdateProduct));
router.get(
  '/api/products/:category',
  catchErrors(ProductController.GetProductByCategory),
);
router.get('/api/product/:id', catchErrors(ProductController.GetProductById));

router.post('/api/benefits', catchErrors(BenefitController.CreateBenefit));
router.get('/api/benefits', catchErrors(BenefitController.GetBenefits));
router.get(
  '/api/benefits/not-default',
  catchErrors(BenefitController.GetNotDefaultBenefits),
);

router.post('/api/quote', catchErrors(QuoteController.createQuoteForNewClient));
router.get('/api/quotes/total', catchErrors(QuoteController.getTotalQuote));

router.get('/api/clients', catchErrors(ClientController.GetClients));
router.get('/api/clients/:id', catchErrors(ClientController.GetClientById));

export default router;
