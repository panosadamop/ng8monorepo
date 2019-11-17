import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'app1',
    loadChildren: '../../projects/searchcustomer/src/app/app.module-export#SearchcustomerModule'
  },
  /*{
    path: 'app2',
    loadChildren: '../../projects/customerposition/src/app/app.module-export#App2Module'
  },
  {
    path: 'somecoreroute',
    component: SomeCoreComponentComponent
  },*/
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
