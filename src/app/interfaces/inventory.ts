import { Product } from './product';
import { Category } from './category';
import { Compatibility } from './compatibility';
import { Measure } from './measure';
import { Movement } from './movement';

export interface Inventory {
  _id?: string;
  name: string;
  description: string;
  products?: [Product];
  categories?: [Category];
  compatibilities?: [Compatibility];
  measures?: [Measure];
  movements?: [Movement];
}
