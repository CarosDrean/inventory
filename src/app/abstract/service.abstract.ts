import { HttpClient } from '@angular/common/http';
import { Functions } from '../interfaces/functions';
import { map } from 'rxjs/operators';
import { DataQuery } from '../interfaces/query';
import { Helpers } from '../utils/helpers';

export abstract class Service {

  items: any[];
  item: any;
  private helper: Helpers;

  constructor(private http: HttpClient, readonly URL_API: string, private functions: Functions) {
    this.helper = new Helpers();
  }

  getItems(fields: string[]) {
    const query: DataQuery = {
      type: 'query',
      operation: this.functions.GET_ALL,
      fields
    };

    return this.http.post(this.URL_API, this.helper.queryBuilder(query)).pipe(
      map((items: any) => this.items = items.data)
    );
  }

  getItem(id: string, fields: string[]) {
    const query: DataQuery = {
      type: 'query',
      operation: this.functions.GET_ID,
      data: { id },
      fields
    };
    return this.http.post(this.URL_API, this.helper.queryBuilder(query)).pipe(
      map((item: any) => this.item = item.data )
    );
  }

  createItem(data: any, fields: string[]) {
    const query: DataQuery = {
      type: 'mutation',
      operation: this.functions.CREATED,
      fields,
      data
    };
    return this.http.post(this.URL_API, this.helper.queryBuilder(query));
  }

  updateItem(item: any) {
    return this.http.put(this.URL_API + `/${item._id}`, item);
  }

  deleteItem(id: string) {
    const query: DataQuery = {
      type: 'mutation',
      operation: this.functions.DELETED,
      fields: ['id'],
      data: { id }
    };
    return this.http.post(this.URL_API, this.helper.queryBuilder(query));
  }
}
