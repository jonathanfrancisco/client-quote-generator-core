import createError from 'http-errors';
import Clients from '../../models/Clients';
import { IClient } from './clientInterface';

class ClientService {
  async getClients(): Promise<IClient[]> {
    const clients = await Clients.query();

    return clients;
  }

  async getClientById(id: string): Promise<IClient> {
    const client = await Clients.query().findById(id);

    return client;
  }
}

export default ClientService;
