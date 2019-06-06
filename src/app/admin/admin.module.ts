import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { AdminRoutingModule } from './admin.routes';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { InventoryComponent } from './components/inventory/inventory.component';

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    UsersComponent,
    InventoryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    SweetAlert2Module
  ]
})
export class AdminModule { }
