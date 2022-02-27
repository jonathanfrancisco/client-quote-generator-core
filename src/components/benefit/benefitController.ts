import {Request, Response} from 'express'
import BenefitService from './benefitService'


const benefitService = new BenefitService()

export default {

    CreateBenefit: async (req: any, res: Response) => {
        const benefit = await benefitService.createBenefit(req.body);

        return res.json({
            message: "Created Successfully",
            result: benefit
        })
    },
    GetBenefits: async (req: any, res: Response) => {
        const benefits = await benefitService.getBenefits();

        return res.json({
            message: "Fetched Successfully",
            result: benefits
        })
    }
}