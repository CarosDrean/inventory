import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [MainComponent, DashboardComponent, UsersComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
