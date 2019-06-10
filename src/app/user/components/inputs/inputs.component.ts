import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/abstract/componente.abstract';
import { Movement } from 'src/app/interfaces/movement';
import { MovementService } from 'src/app/services/movement.service';
import { NotyfService } from 'ng-notyf';
import { ProductService } from 'src/app/services/product.service';

declare var $: any;

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styles: []
})
export class InputsComponent extends Componente implements OnInit {

  case: string;
  input: Movement;

  keyword = 'name';

  // 'product{_id,name}' es por que necesito lo que hay dentro de producto
  constructor(public ms: MovementService, private notyfs: NotyfService, public ps: ProductService) {
    super(ms, notyfs, ['_id', 'product{_id,name}', 'quantity', 'pricePurchase', 'date']);
    this.case = 'Nueva';
    const idInventory = sessionStorage.getItem('_idInventory');
    ps.getItemsId(idInventory, ['_id', 'name']).subscribe();
  }

  ngOnInit() {
  }

  getItems(fields: string[]) {
    this.getItemsId(sessionStorage.getItem('_idInventory'), fields);
  }

  edit(input: Movement) {
    $('.cajaexterna').show();
    this.case = 'Editar';
    this.idEdit = input._id;
    this.input = input;
  }

  resetItem() {
    this.input = {
      date: this.getDate(),
      time: this.getHour(),
      pricePurchase: 0,
      priceTotal: 0,
      priceUnit: 0,
      product: '',
      quantity: 1,
      type: 'Input',
      user: sessionStorage.getItem('_id'),
      inventory: sessionStorage.getItem('_idInventory')
    };
  }

  selectEvent(item) {
    console.log(item);
    this.input.product = item._id;
  }

}
