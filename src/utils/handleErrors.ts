import { Request, Response, NextFunction } from 'express';
import createHttpError, { HttpError } from 'http-errors';
import pino from 'pino';

const logger = pino();

const handleErrors = (
  err: Error,
  req: Request,
  res: Response,
  next?: NextFunction,
) => {
  logger.error(err.stack);
  if (!createHttpError.isHttpError(err)) {
    return res.status(500).send({
      error: {
        message: 'Internal Server Error. Please try again later',
      },
    });
  }

  // not sure why but
  // name, stack, status, and statusCode is acccessible here
  // but gets omitted or removed on 'httpError' once response is sent and received by client
  const httpError = err as HttpError;

  return res.status(httpError.status).send({
    error: httpError,
  });
};

export default handleErrors;
