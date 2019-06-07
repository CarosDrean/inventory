import { Component, OnInit } from '@angular/core';
import { MeasureService } from 'src/app/services/measure.service';
import { Measure } from 'src/app/interfaces/measure';
import { Componente } from 'src/app/abstract/componente.abstract';
import { NotyfService } from 'ng-notyf';

declare var $: any;

@Component({
  selector: 'app-measures',
  templateUrl: './measures.component.html',
  styles: []
})
export class MeasuresComponent extends Componente implements OnInit {

  case: string;
  measure: Measure;

  constructor(public ms: MeasureService, private notyfs: NotyfService) {
    super(ms, notyfs, ['_id', 'name', 'denomination']);
    this.case = 'Nuevo';
  }

  ngOnInit() {
  }

  getItems(fields: string[]) {
    this.getItemsId(sessionStorage.getItem('_idInventory'), fields);
  }

  edit(measure: Measure) {
    $('.cajaexterna').show();
    this.case = 'Editar';
    this.idEdit = measure._id;
    this.measure = measure;
  }

  resetItem() {
    this.measure = {
      denomination: '',
      name: '',
      inventory: sessionStorage.getItem('_idInventory')
    };
  }

}
