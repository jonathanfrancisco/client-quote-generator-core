import catchErrors from 'src/utils/catchErrors';
import Benefits from '../../models/Benefits'
import {IBenefitBody, IBenefit} from './benefitInterface'
import createError from 'http-errors';

class BenefitService {
    constructor() {}

    async createBenefit({name, amount, value}): Promise<IBenefitBody> {
        const benefit = await Benefits.query().insert({
            name, amount, value
        })

        return await Benefits.query().findById(benefit.id)
    }

    async getBenefits(): Promise<IBenefit[]> {
        const benefit = await Benefits.query()

        if (benefit.length < 1) {
            throw createError(404, 'No products found');
        }

        return benefit
    }
}

export default BenefitService