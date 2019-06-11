import { HttpClient } from '@angular/common/http';
import { Functions } from '../utils/functions';
import { map } from 'rxjs/operators';
import { DataQuery } from '../interfaces/query';
import { Helpers } from '../utils/helpers';
import { SpecificTypes } from '../utils/specific-types.enum';

export abstract class Service {

  items: any;
  item: any;
  private helper: Helpers;
  private nameContent = 'inventory';

  // TODO: falta regresar mensajes personalizados

  constructor(private http: HttpClient, readonly URL_API: string, private functions: Functions) {
    this.helper = new Helpers();
  }

  getItems(fields: string[]) {
    const query: DataQuery = {
      type: 'query',
      specificType: SpecificTypes.GET_ALL,
      operation: this.functions.GET_ALL,
      fields
    };
    return this.http.post(this.URL_API, this.helper.queryBuilder(query)).pipe(
      map((items: any) => this.items = items)
    );
  }

  getItemsId(id: string, fields: string[]) {
    const query: DataQuery = {
      type: 'query',
      specificType: SpecificTypes.GET_ALL_ID,
      operation: this.functions.GET_ALL_ID,
      fields,
      id,
      nameContent: this.nameContent
    };
    return this.http.post(this.URL_API, this.helper.queryBuilder(query)).pipe(
      map((items: any) => this.items = items)
    );
  }

  getItem(id: string, fields: string[]) {
    const query: DataQuery = {
      type: 'query',
      specificType: SpecificTypes.GET_ID,
      operation: this.functions.GET_ID,
      id,
      fields
    };
    return this.http.post(this.URL_API, this.helper.queryBuilder(query)).pipe(
      map((item: any) => this.item = item.data )
    );
  }

  createItem(data: any, fields: string[]) {
    const query: DataQuery = {
      type: 'mutation',
      specificType: SpecificTypes.CREATED,
      operation: this.functions.CREATED,
      fields,
      data
    };
    return this.http.post(this.URL_API, this.helper.queryBuilder(query));
  }

  updateItem(data: any, fields: string[]) {
    const query: DataQuery = {
      type: 'mutation',
      specificType: SpecificTypes.UPDATED,
      operation: this.functions.UPDATED,
      fields,
      id: data._id,
      data
    };
    return this.http.post(this.URL_API, this.helper.queryBuilder(query));
  }

  deleteItem(id: string) {
    const query: DataQuery = {
      type: 'mutation',
      specificType: SpecificTypes.DELETED,
      operation: this.functions.DELETED,
      fields: ['_id'],
      id
    };
    return this.http.post(this.URL_API, this.helper.queryBuilder(query));
  }
}
