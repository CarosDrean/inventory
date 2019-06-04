import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { DataQuery } from '../interfaces/query';
import { Functions } from '../interfaces/functions';
import { Service } from '../abstract/service.abstract';

@Injectable({
  providedIn: 'root'
})
export class MeasureService extends Service {
  constructor(private https: HttpClient) {
    super(https, environment.api, new Functions('measure', 'measures', 'createMeasure', 'updateMeasure', 'deleteMeasure'));
  }
}
