import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CompatibilitiesComponent } from './components/compatibilities/compatibilities.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { OutputsComponent } from './components/outputs/outputs.component';
import { ProductsComponent } from './components/products/products.component';
import { MeasuresComponent } from './components/measures/measures.component';
import { UserRoutingModule } from './user.routes';

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    CategoriesComponent,
    CompatibilitiesComponent,
    InputsComponent,
    OutputsComponent,
    ProductsComponent,
    MeasuresComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
