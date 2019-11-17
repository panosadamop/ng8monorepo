import { NgModule } from '@angular/core';

import {SearchCustomerComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { SearchSampleComponent } from './searchsample/searchsample.component';
import {CommonLibModule} from '../../../common-lib/src/lib/common-lib.module';
import {StoreModule} from '@ngrx/store';
import {showHideReducer} from './store/showHideElement/hide-show.reducer';

const routes: Routes = [
  { path: '', component: SearchSampleComponent }
];


@NgModule({
  declarations: [
    SearchCustomerComponent,
    SearchSampleComponent
  ],
  imports: [
    CommonModule,
    CommonLibModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('searchCustomerShowHide', showHideReducer),
  ],
  providers: [],
  bootstrap: [SearchCustomerComponent]
})
export class SearchCustomerModule { }
