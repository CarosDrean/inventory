import { Component, OnInit } from '@angular/core';
import { Inventory } from '../../../interfaces/inventory';
import { Componente } from 'src/app/abstract/componente.abstract';
import { InventoryService } from 'src/app/services/inventory.service';
import { NotyfService } from 'ng-notyf';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent extends Componente implements OnInit {

  user;
  case: string;
  inventory: Inventory;
  fieldsP = ['_id', 'name', 'description'];

  constructor(public is: InventoryService, private notyfs: NotyfService, private router: Router, private us: UserService) {
    super(is, notyfs, ['_id', 'name', 'description'], 'Inventario');
    this.case = 'Nuevo';
    this.getUser();
  }

  ngOnInit() {
  }

  getUser() {
    const id = sessionStorage.getItem('_id');
    this.us.getItem(id, ['firstname']).subscribe(() => {
      this.user = this.us.item.user;
      if (!this.user) {
        this.router.navigate(['/login']);
      }
    });
  }

  edit(inventory: Inventory) {
    $('.cajaexterna').show();
    this.case = 'Editar';
    this.idEdit = inventory._id;
    this.inventory = inventory;
  }

  resetItem() {
    this.inventory = {
      description: '',
      name: ''
    };
  }

  logOut() {
    sessionStorage.removeItem('_id');
    sessionStorage.removeItem('rol');
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
