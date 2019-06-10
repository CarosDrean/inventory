export interface Movement {
  _id?: string;
  product: string;
  quantity: number;
  pricePurchase?: number;
  priceUnit: number;
  priceTotal: number;
  user: string;
  date: string;
  time: string;
  type: string;
  inventory?: string;
}
