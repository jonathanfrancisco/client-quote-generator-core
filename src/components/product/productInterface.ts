export interface IProductBody {
  name: string;
  category: string;
  description: string;
  clientQuoteCount: number;
}

export interface IProduct {
  name: string;
  category: string;
  description: string;
  clientQuoteCount: number;
  create_at?: string;
  updated_at?: string;
}
