import { Injectable } from '@angular/core';
import { Service } from '../abstract/service.abstract';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Functions } from '../utils/functions';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends Service {

  constructor(private https: HttpClient) {
    super(https, environment.api, new Functions(
      'product', 'products', 'productsInventory', 'createProduct', 'updateProduct', 'deleteProduct'
      ));
  }
}
