import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainComponent } from './components/main/main.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CompatibilitiesComponent } from './components/compatibilities/compatibilities.component';
import { ProductsComponent } from './components/products/products.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { OutputsComponent } from './components/outputs/outputs.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MeasuresComponent } from './components/measures/measures.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'categories', component: CategoriesComponent },
          { path: 'compatibilities', component: CompatibilitiesComponent },
          { path: 'products', component: ProductsComponent },
          { path: 'measures', component: MeasuresComponent },
          { path: 'inputs', component: InputsComponent },
          { path: 'outputs', component: OutputsComponent },
          { path: '**', pathMatch: 'full', redirectTo: 'dashboard' },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
