import { uuid } from 'uuidv4';
import { JSONSchema, Model } from 'objection';
import Clients from './Clients';
import Products from './Products';

class ClientQuotes extends Model {
  id!: string;

  clientId!: string;

  productId!: string;

  additionalComment: string;

  paymentMethod: string;

  updatedAt?: string;

  createdAt: string;

  static tableName = 'client_quotes';

  static jsonSchema = {
    type: 'object',
    required: ['clientId', 'productId'],
    properties: {
      id: {
        type: 'string',
      },
      clientId: {
        type: 'string',
      },
      productId: {
        type: 'string',
      },
      additionalComment: {
        type: 'string',
      },
      paymentMethod: {
        type: 'string',
      },
      createdAt: {
        type: 'string',
      },
      updatedAt: {
        type: 'string',
      },
    },
  };

  static get relationMappings() {
    return {
      client: {
        relation: Model.BelongsToOneRelation,
        modelClass: Clients,
        join: {
          from: 'client_quotes.clientId',
          to: 'clients.id',
        },
      },
      product: {
        relation: Model.BelongsToOneRelation,
        modelClass: Products,
        join: {
          from: 'client_quotes.productId',
          to: 'products.id',
        },
      },
    };
  }

  async $beforeInsert(): Promise<void> {
    this.id = uuid();
    this.createdAt = new Date().toISOString();
  }

  async $beforeUpdate(): Promise<void> {
    this.updatedAt = new Date().toISOString();
  }
}

export default ClientQuotes;
