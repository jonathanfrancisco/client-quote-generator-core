import { Request, Response } from 'express';
import BenefitService from './benefitService';

const benefitService = new BenefitService();

export default {
  CreateBenefit: async (req: Request, res: Response) => {
    const benefit = await benefitService.createBenefit(req.body);

    return res.json({
      message: 'Created Successfully',
      result: benefit,
    });
  },
  UpdateBenefit: async (req: Request, res: Response) => {
    const benefit = await benefitService.updateBenefit({
      benefitId: req.params.id,
      ...req.body,
    });

    return res.json({
      message: 'Updated Successfully',
      result: benefit,
    });
  },
  GetBenefits: async (req: Request, res: Response) => {
    const benefits = await benefitService.getBenefits();

    return res.json({
      message: 'Fetched Successfully',
      result: benefits,
    });
  },
  GetNotDefaultBenefits: async (req: Request, res: Response) => {
    const benefits = await benefitService.getNotDefaultBenefit();

    return res.json({
      message: 'Fetched Successfully',
      result: benefits,
    });
  },
};
