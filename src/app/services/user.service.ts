import { Injectable } from '@angular/core';
import { Service } from '../abstract/service.abstract';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Functions } from '../interfaces/functions';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService extends Service {

  constructor(private https: HttpClient, private router: Router) {
    super(https, environment.api, new Functions('user', 'users', '', 'createUser', 'updateUser', 'deleteUser'));
  }

  private queryLogin(email: string, password: string) {
    const query = {
      query: `mutation {
        loginUser(email: "${email}", password: "${password}") {
          success
          user {
            _id
            role
          }
          token
          errors{
            path
            message
          }
        }
      }`,
      variables: ''
    };
    return query;
  }

  signIn(email: string, password: string) {
    return this.https.post(this.URL_API, this.queryLogin(email, password));
  }

  login(user: User, token: string) {
    console.log(user);
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('_id', user._id);
    sessionStorage.setItem('rol', user.role);
    if (user.role === 'Admin') {
      this.router.navigate(['/admin']);
    } else if (user.role === 'User') {
      this.router.navigate(['/user']);
    }
  }

  getToken() {
    const token = sessionStorage.getItem('token');
    if (!token) {
      return '';
    }
    return token;
  }
}
