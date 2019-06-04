import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Helpers } from '../utils/helpers';
import { Measure } from '../interfaces/measure';
import { environment } from 'src/environments/environment.prod';
import { DataQuery } from '../interfaces/query';
import { Functions } from '../interfaces/functions';

@Injectable({
  providedIn: 'root'
})
export class MeasureService {

  items: any[];
  api = environment.api;
  private helper: Helpers;

  private functions: Functions = {
    GET_ID: 'measure',
    GET_ALL: 'measures',
    CREATED: 'createMeasure',
    UPDATED: 'updateMeasure',
    DELETED: 'deleteMeasure'
  };

  constructor(private http: HttpClient) {
    this.helper = new Helpers();
  }

  getItems(item: any) {
    const query: DataQuery = {
      type: 'query',
      operation: 'measures',
      fields: ['_id', 'name']
    };

    console.log(this.helper.queryBuilder(query).query);

    return this.http.post(this.api, this.helper.queryBuilder(query)).pipe(
      map((items: any) => this.items = items.data)
    );
  }

  createItem(item: any, fields: string[] = ['_id', 'name']) {
    const query: DataQuery = {
      type: 'mutation',
      operation: 'createMeasure',
      fields: ['_id', 'name'],
      data: item
    };

    return this.http.post(this.api, this.helper.queryBuilder(query));
  }
}
