import ClientQuotes from '../../models/ClientQuotes';
import { IQuoteBody, IQuote, IQuoteExistingClientBody } from './quoteInterface';
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
    });

    await Promise.all(
      clientBenefit.map(async (benefit) => {
        await ClientBenefits.query().insert({
          benefitId: benefit.benefitId,
          type: benefit.type,
          clientQuoteId: quote.id,
          amount: benefit.amount,
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
    const updatedProduct = await Product.query().patchAndFetchById(product.id, {
      clientQuoteCount: product.clientQuoteCount + 1,
    });
    delete updatedProduct.id;
    delete updatedProduct.created_at;
    delete updatedProduct.updated_at;

    return {
      id: quote.id,
      ...client.toClient(),
      product: updatedProduct,
      clientBenefit: await ClientBenefits.query().where(
        'clientQuoteId',
        quote.id,
      ),
      additionalComment: quote.additionalComment,
      totalCost: costs,
    };
  }

  async getTotalQuote() {
    const total = await ClientQuotes.query().count();
    return total;
  }

  async createQuoteForExistingClient({
    id,
    smokingHabit,
    productId,
    clientBenefit,
    additionalComment,
    annualPremium,
  }: IQuoteExistingClientBody): Promise<IQuote> {
    const client = await Clients.query().findOne({ id });

    let bday = client.birthday.toString();

    bday = new Date(bday).toLocaleDateString('en-PH');

    const age = GetAge(bday);

    await Clients.query().updateAndFetchById(id, {
      name: client.name,
      gender: client.gender,
      birthday: bday,
      age,
      smokingHabit,
    });

    const quote = await ClientQuotes.query().insert({
      clientId: client.id,
      productId,
      additionalComment,
    });

    await Promise.all(
      clientBenefit.map(async (benefit) => {
        await ClientBenefits.query().insert({
          benefitId: benefit.benefitId,
          type: benefit.type,
          clientQuoteId: quote.id,
          amount: benefit.amount,
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
    const updatedProduct = await Product.query().patchAndFetchById(product.id, {
      clientQuoteCount: product.clientQuoteCount + 1,
    });
    delete updatedProduct.id;
    delete updatedProduct.created_at;
    delete updatedProduct.updated_at;

    return {
      id: quote.id,
      ...client.toClient(),
      product: updatedProduct,
      clientBenefit: await ClientBenefits.query().where(
        'clientQuoteId',
        quote.id,
      ),
      additionalComment: quote.additionalComment,
      totalCost: costs,
    };
  }
}

export default QuoteService;
