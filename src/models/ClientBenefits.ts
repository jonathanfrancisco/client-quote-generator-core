import { uuid } from 'uuidv4';
import { Model, QueryContext } from 'objection';
import Benefits from './Benefits';
import ClientQuotes from './ClientQuotes';

class ClientBenefits extends Model {
  id!: string;

  benefitId!: string;

  type: string;

  clientQuoteId!: string;

  amount!: string;

  static tableName = 'client_benefits';

  static jsonSchema = {
    type: 'object',
    required: ['benefitId', 'clientQuoteId'],
    properties: {
      id: {
        type: 'string',
      },
      benefitId: {
        type: 'string',
      },
      type: {
        type: 'string',
      },
      clientQuoteId: {
        type: 'string',
      },
      amount: {
        type: 'string',
      },
    },
  };

  static get relationMappings() {
    return {
      benefits: {
        relation: Model.HasManyRelation,
        modelClass: Benefits,
        join: {
          from: 'client_benefits.benefitId',
          to: 'benefits.id',
        },
      },
      clientQuote: {
        relation: Model.BelongsToOneRelation,
        modelClass: ClientQuotes,
        join: {
          from: 'client_benefits.clientQuoteId',
          to: 'client_quotes.id',
        },
      },
    };
  }

  async $beforeInsert(queryContext: QueryContext): Promise<void> {
    this.id = uuid();
  }
}

export default ClientBenefits;
