import { uuid } from 'uuidv4';
import { Model, QueryContext } from 'objection';
import Benefits from './Benefits';
import Products from './Products';

class ProductBenefits extends Model {
  id!: string;

  type!: string;

  productId!: string;

  benefitId!: string;

  static tableName = 'product_benefits';

  static jsonSchema = {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      type: {
        type: 'string',
      },
      productId: {
        type: 'string',
      },
      benefitId: {
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
          from: 'product_benefits.benefitId',
          to: 'benefits.id',
        },
      },
      product: {
        relation: Model.BelongsToOneRelation,
        modelClass: Products,
        join: {
          from: 'product_benefits.productId',
          to: 'products.id',
        },
      },
    };
  }

  async $beforeInsert(queryContext: QueryContext): Promise<void> {
    this.id = uuid();
  }
}
export default ProductBenefits;
