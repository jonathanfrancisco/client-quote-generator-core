import { Request, Response } from 'express';

const helloWorldHandler = async (req: Request, res: Response) => {
  return res.send({
    data: {
      message: 'Hello World',
    },
  });
};

export default helloWorldHandler;
