export interface IClientBenefit {
  id: string;
  benefitId: string;
  type: string;
  clientQuoteId: string;
}

export interface IClientBenefitBody {
  benefitId: string;
  type: string;
}
