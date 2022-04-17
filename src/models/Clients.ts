import { v4 as uuid } from 'uuid';
import { Model } from 'objection';
import ClientQuotes from './ClientQuotes';

class Clients extends Model {
  id!: string;
  name!: string;
  gender!: string;
  birthday!: string;
  age!: number;
  smokingHabit!: string;
  updatedAt?: string;
  createdAt: string;

  static tableName = 'clients';

  static jsonSchema = {
    type: 'object',
    required: ['name', 'gender', 'birthday', 'age', 'smokingHabit'],
    properties: {
      id: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      gender: {
        enum: ['FEMALE', 'MALE'],
      },
      birthday: {
        type: 'string',
      },
      age: {
        type: 'number',
      },
      smokingHabit: {
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
      quotes: {
        relation: Model.HasManyRelation,
        modelClass: ClientQuotes,
        join: {
          from: 'clients.id',
          to: 'client_quotes.clientId',
        },
      },
    };
  }

  async $beforeInsert(): Promise<any> {
    this.id = uuid();
    this.createdAt = new Date().toISOString();
  }

  async $beforeUpdate(): Promise<any> {
    this.updatedAt = new Date().toISOString();
  }
}

export default Clients;
