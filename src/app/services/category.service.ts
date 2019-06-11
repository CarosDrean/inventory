import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service } from '../abstract/service.abstract';
import { environment } from 'src/environments/environment.prod';
import { Functions } from '../utils/functions';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends Service {

  constructor(private https: HttpClient) {
    super(https, environment.api, new Functions(
      'category', 'categorys', 'categorysInventory', 'createCategory', 'updateCategory', 'deleteCategory'
      ));
  }
}
