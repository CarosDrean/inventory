import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/abstract/componente.abstract';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { NotyfService } from 'ng-notyf';

declare var $: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent extends Componente implements OnInit {

  case: string;
  user: User;
  fieldsP = ['_id', 'firstname', 'user', 'phone', 'role'];

  constructor(public us: UserService, private notyfs: NotyfService) {
    super(us, notyfs, ['_id', 'firstname', 'user', 'phone', 'role']);
    this.case = 'Nuevo';
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
