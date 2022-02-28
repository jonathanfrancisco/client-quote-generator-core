import Benefits from '../../models/Benefits'
import {IBenefitBody, IBenefit} from './benefitInterface'
import createError from 'http-errors';

class BenefitService {
    constructor() {}

    async createBenefit({name, amount, value, defaultBenefit}): Promise<IBenefitBody> {
        const benefit = await Benefits.query().insert({
            name, amount, value, defaultBenefit
        })

        return await Benefits.query().findById(benefit.id)
    }

    async getBenefits(): Promise<IBenefit[]> {
        const benefit = await Benefits.query()

        if (benefit.length < 1) {
            throw createError(404, 'No benefits found');
        }

        return benefit
    }
}

export default BenefitService