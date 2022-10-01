import { IBenefit } from '../benefit/benefitInterface';
import {
  IProductBenefitBody,
  IProductBenefit,
} from '../productBenefit/productBenefitInterface';

export interface IProductBody {
  name: string;
  category: string;
  description: string;
  clientQuoteCount: number;
  benefits: IProductBenefitBody[];
}

export interface IProduct {
  name: string;
  category: string;
  description: string;
  clientQuoteCount: number;
  create_at?: string;
  updated_at?: string;
  productBenefits: IProductBenefit[];
}

export interface IProductWithoutBenefit {
  name: string;
  category: string;
  description: string;
  clientQuoteCount: number;
}
