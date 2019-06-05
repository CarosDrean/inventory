import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainComponent } from './components/main/main.component';
import { UsersComponent } from './components/users/users.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'users', component: UsersComponent },
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
export class AdminRoutingModule {}
