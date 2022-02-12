import { Request, Response } from 'express';

const handleRouteNotFound = (req: Request, res: Response) => {
  return res.status(404).send({
    error: {
      message: 'Route not found.',
    },
  });
};

export default handleRouteNotFound;
