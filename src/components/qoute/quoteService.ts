import ClientQuotes from '../../models/ClientQuotes';
import { IQuoteBody, IQuote } from './quoteInterface';
import Clients from '../../models/Clients';
import ClientBenefits from '../../models/ClientBenefits';
import TotalCosts from '../../models/TotalCosts';
import GetAge from '../../utils/getAge';
import Product from '../../models/Products';

class QuoteService {
  async createQuoteForNewClient({
    name,
    gender,
    birthday,
    smokingHabit,
    productId,
    clientBenefit,
    additionalComment,
    annualPremium,
    paymentMethod,
  }: IQuoteBody): Promise<IQuote> {
    const age = GetAge(birthday);

    const client = await Clients.query().insert({
      name,
      gender,
      birthday,
      age,
      smokingHabit,
    });

    const quote = await ClientQuotes.query().insert({
      clientId: client.id,
      productId,
      additionalComment,
      paymentMethod,
    });

    await Promise.all(
      clientBenefit.map(async (benefit) => {
        await ClientBenefits.query().insert({
          benefitId: benefit.benefitId,
          type: benefit.type,
          clientQuoteId: quote.id,
        });
      }),
    );

    const costs = await TotalCosts.query().insert({
      clientQuoteId: quote.id,
      annual: parseFloat(annualPremium.toFixed(2)),
      semi: parseFloat((annualPremium / 2).toFixed(2)),
      quarterly: parseFloat((annualPremium / 4).toFixed(2)),
      monthly: parseFloat((annualPremium / 12).toFixed(2)),
    });

    delete costs.id;
    delete costs.clientQuoteId;

    const product = await Product.query().findById(productId);
    delete product.id;
    delete product.created_at;
    delete product.updated_at;

    return {
      id: quote.id,
      ...client.toClient(),
      product,
      clientBenefit: await ClientBenefits.query().where(
        'clientQuoteId',
        quote.id,
      ),
      additionalComment: quote.additionalComment,
      totalCost: costs,
      paymentMethod: quote.paymentMethod,
    };
  }
}

export default QuoteService;
