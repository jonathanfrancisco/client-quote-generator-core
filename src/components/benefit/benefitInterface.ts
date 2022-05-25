export interface IBenefitBody {
  name: string;
  amount: boolean;
  value: string;
  defaultBenefit: boolean;
  type: string = null;
}

export interface IBenefit {
  id: string;
  name: string;
  amount: boolean;
  value: string;
  defaultBenefit: boolean;
  type: string;
}
