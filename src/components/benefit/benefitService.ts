import createError from 'http-errors';
import Benefits from '../../models/Benefits';
import { IBenefitBody, IBenefit } from './benefitInterface';

class BenefitService {
  async createBenefit({
    name,
    amount,
    value,
    defaultBenefit,
    type,
  }): Promise<IBenefitBody> {
    if (defaultBenefit && type === '') {
      throw createError(
        422,
        "Error: Type shouldn't be null if the benefit is default",
      );
    }

    if (!defaultBenefit && type !== '') {
      throw createError(
        422,
        'Error: Type should be null if the benefit is not default',
      );
    }

    const benefit = await Benefits.query().insert({
      name,
      amount,
      value,
      defaultBenefit,
      type,
    });

    return Benefits.query().findById(benefit.id);
  }

  async getBenefits(): Promise<IBenefit[]> {
    const benefits = await Benefits.query();

    if (benefits.length < 1) {
      throw createError(404, 'No benefits found');
    }

    return benefits;
  }

  async getNotDefaultBenefit(): Promise<IBenefit[]> {
    const benefits = await Benefits.query().where('type', null);

    if (benefits.length < 1) {
      throw createError(404, 'No benefits found');
    }

    return benefits;
  }
}

export default BenefitService;
