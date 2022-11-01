import { NextFunction, Request, Response } from 'express';
import QuoteService from './quoteService';

const quoteService = new QuoteService();

export default {
  createQuoteForNewClient: async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const quote = await quoteService.createQuoteForNewClient(req.body);

    return res.json({
      message: 'Created Successfully',
      result: quote,
    });
  },
  getTotalQuote: async (req: Request, res: Response, next: NextFunction) => {
    const totalQuote = await quoteService.getTotalQuote();

    return res.json({
      message: '',
      result: totalQuote,
    });
  },
  createQuoteForExistingClient: async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const quote = await quoteService.createQuoteForExistingClient(req.body);

    return res.json({
      message: 'Created Successfully',
      result: quote,
    });
  },
};
