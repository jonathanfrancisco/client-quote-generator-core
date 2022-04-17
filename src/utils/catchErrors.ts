import { NextFunction, Request, Response } from 'express';

type ExpressHandlerFunction = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<Response>;

const catchErrors = (fn: ExpressHandlerFunction) => {
  function wrappedExpressHandlerFunction(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    return fn(req, res, next).catch(next);
  }

  return wrappedExpressHandlerFunction;
};

export default catchErrors;
