import { NextFunction, Request, Response } from 'express';
import ClientService from './clientService';

const clientService = new ClientService();

export default {
  GetClients: async (req: Request, res: Response, next: NextFunction) => {
    const clients = await clientService.getClients();

    return res.json({
      message: 'Fetched Successfully',
      result: clients,
    });
  },
  GetClientById: async (req: Request, res: Response, next: NextFunction) => {
    const client = await clientService.getClientById(req.params.id);

    return res.json({
      message: 'Fetched Successfully',
      result: client,
    });
  },
};
