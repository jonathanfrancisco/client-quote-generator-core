export interface IProductBody {
  name: string;
  category: string;
  description: string;
}

export interface IProduct {
  name: string;
  category: string;
  description: string;
  create_at?: string;
  updated_at?: string;
}
