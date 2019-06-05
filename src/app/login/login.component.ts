import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';
import { NotyfService } from 'ng-notyf';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  user: string;
  password: string;

  constructor(private us: UserService, private notyfService: NotyfService) { }

  ngOnInit() {
  }

  login() {
    this.us.signIn(this.user, this.password).subscribe((res: any) => {
      const response = res.data.loginUser;
      if (!response.success) {
        this.notyfService.error(response.errors[0].message);
      } else {
        this.notyfService.success('Ingresando...');
        this.us.login(response.user, response.token);
      }
    });
  }
}
