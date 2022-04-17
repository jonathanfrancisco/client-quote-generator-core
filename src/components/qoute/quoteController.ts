import { NextFunction, Request, Response } from 'express';
import QuoteService from './quoteService';

const quoteService = new QuoteService();

export default {
  createQuoteForNewClient: async (
    req: any,
    res: Response,
    next: NextFunction,
  ) => {
    const quote = await quoteService.createQuoteForNewClient(req.body);

    return res.json({
      message: 'Created Successfully',
      result: quote,
    });
  },
};
