import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/abstract/componente.abstract';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';
import { NotyfService } from 'ng-notyf';

declare var $: any;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: []
})
export class CategoriesComponent extends Componente implements OnInit {

  case: string;
  category: Category;

  constructor(public cs: CategoryService, private notyfs: NotyfService) {
    super(cs, notyfs, ['_id', 'name', 'denomination']);
    this.case = 'Nueva';
  }

  ngOnInit() {
  }

  getItems(fields: string[]) {
    this.getItemsId(sessionStorage.getItem('_idInventory'), fields);
  }

  edit(category: Category) {
    $('.cajaexterna').show();
    this.case = 'Editar';
    this.idEdit = category._id;
    this.category = category;
  }

  resetItem() {
    this.category = {
      denomination: '',
      name: '',
      inventory: sessionStorage.getItem('_idInventory')
    };
  }

}
