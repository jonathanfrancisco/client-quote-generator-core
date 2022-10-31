import { IBenefit } from '../benefit/benefitInterface';

export interface IProductBenefit {
  benefitId: string;
  type: string;
  productName: string;
  value: string;
  amount: boolean;
}

export interface IProductBenefitBody {
  benefitId: string;
  type: string;
}
