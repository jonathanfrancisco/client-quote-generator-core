import { v4 as uuid } from 'uuid';
import { Model, QueryContext } from 'objection';

class Benefits extends Model {
  id!: string;
  name!: string;
  amount!: boolean;
  value: string;
  defaultBenefit!: boolean;

  static tableName = 'benefits';

  static jsonSchema = {
    type: 'object',
    required: ['name'],
    properties: {
      id: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      amount: {
        type: 'boolean',
        default: true,
      },
      value: {
        type: 'string',
      },
      defaultBenefit: {
        type: 'boolean',
        default: false,
      },
    },
  };

  async $beforeInsert(queryContext: QueryContext): Promise<any> {
    this.id = uuid();
  }
}

export default Benefits;
