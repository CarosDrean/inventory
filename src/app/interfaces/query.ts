export interface DataQuery {
  type: string;
  operation: string;
  fields: string[];
  data?: {};
}
