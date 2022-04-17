import { Request, Response } from 'express';
import createError from 'http-errors';

const sampleApiErrorHandler = async (req: Request, res: Response) => {
  throw createError(
    400,
    'SAMPLE API ERROR: This feature is currently not available Ref.: CQG01',
    {
      reason: 'In progress',
    },
  );
};

export default sampleApiErrorHandler;
