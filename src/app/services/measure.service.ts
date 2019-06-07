import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment.prod';
import { Functions } from '../interfaces/functions';
import { Service } from '../abstract/service.abstract';

@Injectable({
  providedIn: 'root'
})
export class MeasureService extends Service {
  constructor(private https: HttpClient) {
    super(https, environment.api, new Functions(
      'measure', 'measures', 'measuresInventory', 'createMeasure', 'updateMeasure', 'deleteMeasure'
      ));
  }
}
