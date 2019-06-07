import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/abstract/componente.abstract';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { NotyfService } from 'ng-notyf';
import { InventoryService } from 'src/app/services/inventory.service';

declare var $: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent extends Componente implements OnInit {

  case: string;
  user: User;
  fieldsP = ['_id', 'firstname', 'lastname', 'user', 'password', 'phone', 'dni', 'address', 'role'];

  constructor(public us: UserService, private notyfs: NotyfService, public is: InventoryService) {
    super(us, notyfs, ['_id', 'firstname', 'lastname', 'user', 'password', 'phone', 'dni', 'address', 'role', 'inventory']);
    this.case = 'Nuevo';
    is.getItems(['_id', 'name']).subscribe();
  }

  ngOnInit() {
  }

  edit(user: User) {
    $('.cajaexterna').show();
    this.case = 'Editar';
    this.idEdit = user._id;
    this.user = user;
  }

  resetItem() {
    this.user = {
      address: '',
      dni: 0,
      firstname: '',
      lastname: '',
      password: '',
      phone: 0,
      role: 'Admin',
      user: ''
    };
  }

}
