import { Injectable } from '@angular/core';
import { Service } from '../abstract/service.abstract';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Functions } from '../utils/functions';

@Injectable({
  providedIn: 'root'
})
export class CompatibilityService extends Service {

  constructor(private https: HttpClient) {
    super(https, environment.api, new Functions(
      'compatibility', 'compatibilitys', 'compatibilitysInventory', 'createCompatibility', 'updateCompatibility', 'deleteCompatibility'
      ));
  }
}
