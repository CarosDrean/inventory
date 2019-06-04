export interface DataQuery {
  type: string;
  operation: string;
  fields: string[];
  id?: string;
  specificType: string;
  data?: {};
}
