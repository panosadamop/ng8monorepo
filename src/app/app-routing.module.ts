import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WrappercomponentComponent} from './wrappercomponent/wrappercomponent.component';


const routes: Routes = [
  {
    path: 'searchcustomer',
    loadChildren: '../../projects/searchcustomer/src/app/app.module-export#SearchCustomerModule'
  },
  {
    path: 'customerposition',
    loadChildren: '../../projects/customerposition/src/app/app.module-export#CustomerPositionModule'
  },
  {
    path: 'wrappercomponent',
    component: WrappercomponentComponent
  },
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
