import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/abstract/componente.abstract';
import { Compatibility } from 'src/app/interfaces/compatibility';
import { CompatibilityService } from 'src/app/services/compatibility.service';
import { NotyfService } from 'ng-notyf';

declare var $: any;

@Component({
  selector: 'app-compatibilities',
  templateUrl: './compatibilities.component.html',
  styles: []
})
export class CompatibilitiesComponent extends Componente implements OnInit {

  case: string;
  compatibility: Compatibility;

  constructor(public cs: CompatibilityService, private notyfs: NotyfService) {
    super(cs, notyfs, ['_id', 'name', 'denomination'], 'Compatibilidad');
    this.case = 'Nueva';
  }

  ngOnInit() {
  }

  getItems(fields: string[]) {
    this.getItemsId(sessionStorage.getItem('_idInventory'), fields);
  }

  edit(compatibility: Compatibility) {
    $('.cajaexterna').show();
    this.case = 'Editar';
    this.idEdit = compatibility._id;
    this.compatibility = compatibility;
  }

  resetItem() {
    this.compatibility = {
      denomination: '',
      name: '',
      inventory: sessionStorage.getItem('_idInventory')
    };
  }

}
