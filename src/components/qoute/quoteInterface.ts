import { IProductWithoutBenefit } from '../product/productInterface';
import { IBenefit } from '../benefit/benefitInterface';
import {
  IClientBenefit,
  IClientBenefitBody,
} from '../clientBenefit/clientBenefitInterface';

export interface IQuoteBody {
  name: string;
  gender: string;
  birthday: string;
  smokingHabit: string;
  productId: string;
  clientBenefit: IClientBenefitBody[];
  additionalComment: string;
  annualPremium: number;
}

export interface IQuote {
  id: string;
  name: string;
  gender: string;
  birthday: string;
  age: number;
  smokingHabit: string;
  product: IProductWithoutBenefit;
  clientBenefit: IClientBenefit[];
  additionalComment: string;
  totalCost: ITotalCost;
}

export interface ITotalCost {
  annual: number;
  semi: number;
  quarterly: number;
  monthly: number;
}

export interface IQuoteExistingClientBody {
  id: string;
  smokingHabit: string;
  productId: string;
  clientBenefit: IClientBenefitBody[];
  additionalComment: string;
  annualPremium: number;
}
