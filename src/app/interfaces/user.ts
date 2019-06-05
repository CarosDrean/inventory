import { Movement } from './movement';

export interface User {
  _id?: string;
  firstname: string;
  lastname: string;
  user: string;
  password: string;
  phone: number;
  dni: number;
  role: string;
  movements?: [Movement];
  address: string;
}
