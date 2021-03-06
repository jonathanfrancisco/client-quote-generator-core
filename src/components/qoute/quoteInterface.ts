import { IProduct } from '../product/productInterface';
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
  paymentMethod: string;
}

export interface IQuote {
  id: string;
  name: string;
  gender: string;
  birthday: string;
  age: number;
  smokingHabit: string;
  product: IProduct;
  clientBenefit: IClientBenefit[];
  additionalComment: string;
  totalCost: ITotalCost;
  paymentMethod: string;
}

export interface ITotalCost {
  annual: number;
  semi: number;
  quarterly: number;
  monthly: number;
}
