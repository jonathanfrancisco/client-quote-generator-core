import { IBenefit } from '../benefit/benefitInterface';

export interface IProductBenefit {
  benefitId: string;
  type: string;
  productName: string;
}

export interface IProductBenefitBody {
  benefitId: string;
  type: string;
}
