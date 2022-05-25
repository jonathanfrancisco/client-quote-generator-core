import { uuid } from 'uuidv4';
import { Model, QueryContext } from 'objection';

class Benefits extends Model {
  id!: string;

  name!: string;

  amount!: boolean;

  value: string;

  defaultBenefit!: boolean;

  type: string = null;

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
      type: {
        type: 'string',
        default: null,
      },
    },
  };

  async $beforeInsert(queryContext: QueryContext): Promise<void> {
    this.id = uuid();
  }
}

export default Benefits;
