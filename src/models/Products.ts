import { uuid } from 'uuidv4';
import { Model, ModelOptions, QueryContext } from 'objection';
import ProductBenefits from './ProductBenefits';
import Benefits from './Benefits';

class Products extends Model {
  id!: string;

  name!: string;

  category!: string;

  description!: string;

  clientQuoteCount: number;

  updated_at?: string;

  created_at: string;

  static tableName = 'products';

  static jsonSchema = {
    type: 'object',
    required: ['name', 'category', 'description'],
    properties: {
      id: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      category: {
        enum: ['Trad', 'VUL'],
      },
      description: {
        type: 'string',
      },
      clientQuoteCount: {
        type: 'number',
      },
      created_at: {
        type: 'string',
      },
      updated_at: {
        type: 'string',
      },
    },
  };

  static get relationMappings() {
    return {
      benefits: {
        relation: Model.ManyToManyRelation,
        modelClass: Benefits,
        join: {
          from: 'products.id',
          through: {
            from: 'product_benefits.productId',
            to: 'product_benefits.benefitId',
          },
          to: 'benefits.id',
        },
      },
    };
  }

  async $beforeInsert(queryContext: QueryContext): Promise<void> {
    this.id = uuid();
    this.created_at = new Date().toISOString();
  }

  async $beforeUpdate(): Promise<void> {
    this.updated_at = new Date().toISOString();
  }
}

export default Products;
