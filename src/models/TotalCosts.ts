import { v4 as uuid } from 'uuid';
import { Model, QueryContext } from 'objection';

class TotalCosts extends Model {
  id!: string;
  clientQuoteId!: string;
  annual: number;
  semi: number;
  quarterly: number;
  monthly: number;

  static tableName = 'total_costs';

  static jsonSchema = {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      clientQuoteId: {
        type: 'string',
      },
      annual: {
        type: 'number',
      },
      semi: {
        type: 'number',
      },
      quarterly: {
        type: 'number',
      },
      monthly: {
        type: 'number',
      },
    },
  };

  async $beforeInsert(queryContext: QueryContext): Promise<any> {
    this.id = uuid();
  }
}

export default TotalCosts;
