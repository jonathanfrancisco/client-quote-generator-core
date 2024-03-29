import { uuid } from 'uuidv4';
import { Model, QueryContext } from 'objection';
import Products from './Products';

class Benefits extends Model {
  id!: string;

  name!: string;

  amount!: boolean;

  value: string;

  defaultBenefit!: boolean;

  type: string;

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

  static get relationMappings() {
    return {
      products: {
        relation: Model.ManyToManyRelation,
        modelClass: Products,
        join: {
          from: 'benefits.id',
          through: {
            from: 'product_benefits.benefitId',
            to: 'product_benefits.productId',
          },
          to: 'products.id',
        },
      },
    };
  }

  async $beforeInsert(queryContext: QueryContext): Promise<void> {
    this.id = uuid();
  }
}

export default Benefits;
