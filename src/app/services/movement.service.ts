import { Injectable } from '@angular/core';
import { Service } from '../abstract/service.abstract';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Functions } from '../interfaces/functions';

@Injectable({
  providedIn: 'root'
})
export class MovementService extends Service {

  constructor(private https: HttpClient) {
    super(https, environment.api, new Functions(
      'movement', 'movements', 'movementsInventory', 'createMovement', 'updateMovement', 'deleteMovement'
      ));
  }
}
