import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/abstract/componente.abstract';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { NotyfService } from 'ng-notyf';
import { MeasureService } from 'src/app/services/measure.service';
import { CompatibilityService } from 'src/app/services/compatibility.service';
import { CategoryService } from 'src/app/services/category.service';

declare var $: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent extends Componente implements OnInit {

  case: string;
  product: Product;

  constructor(
    public ps: ProductService,
    private notyfs: NotyfService,
    public ms: MeasureService,
    public cbs: CompatibilityService,
    public cts: CategoryService
    ) {
    super(ps, notyfs, ['_id', 'name', 'model', 'price', 'stock']);
    this.case = 'Nuevo';
  }

  ngOnInit() {
  }

  getItems(fields: string[]) {
    this.getItemsId(sessionStorage.getItem('_idInventory'), fields);
  }

  edit(product: Product) {
    $('.cajaexterna').show();
    this.case = 'Editar';
    this.idEdit = product._id;
    this.product = product;
  }

  resetItem() {
    this.product = {
      category: '',
      color: '',
      compatibility: '',
      description: '',
      measure: '',
      model: '',
      price: 0,
      stock: 0,
      trademark: '',
      name: '',
      inventory: sessionStorage.getItem('_idInventory')
    };
  }

}
