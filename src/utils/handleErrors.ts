import { Request, Response, NextFunction } from 'express';
import { HttpError } from 'http-errors';
import pino from 'pino';

const logger = pino();

const handleErrors = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (process.env.ENVIRONMENT === 'dev') {
    logger.error(err.stack);
  }

  // TODO: if production log errors into a file or logging service

  if (!(err instanceof HttpError)) {
    return res
      .header(err.headers)
      .status(500)
      .send({
        data: {
          message: 'Internal Server Error. Please try again later',
        },
      });
  }

  /* NOTE: the err here is an Error that inherits from HttpError
    The HttpError we're inheriting from looks like this:
    interface HttpError<N extends number = number> extends Error {
      status: N;
      statusCode: N;
      expose: boolean;
      headers?: {
          [key: string]: string;
      } | undefined;
      [key: string]: any;
    }
    NOTE:
    Once spread operator is used on the err the
    inherited fields are not spreaded on a new object but only
    the fields in the new Error that is currently inheriting from HttpError created by createError()
  */
  const apiErrorResponse = {
    data: {
      ...err,
    },
  };

  return res.header(err.headers).status(err.status).send(apiErrorResponse);
};

export default handleErrors;
