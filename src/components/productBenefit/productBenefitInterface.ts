import { IBenefit } from '../benefit/benefitInterface';

export interface IProductBenefit {
  benefitId: string;
  type: string;
  productId: string;
}

export interface IProductBenefitBody {
  benefitId: string;
  type: string;
}
