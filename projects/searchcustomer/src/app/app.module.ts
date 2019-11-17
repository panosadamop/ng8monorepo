import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchCustomerComponent} from './app.component';
import { SearchSampleComponent } from './searchsample/searchsample.component';
import {CommonLibModule} from '../../../common-lib/src/lib/common-lib.module';
import { StoreModule } from '@ngrx/store';
import {showHideReducer} from './store/showHideElement/hide-show.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

const routes: Routes = [
  { path: '', component: SearchSampleComponent }
];

@NgModule({
  declarations: [
    SearchCustomerComponent,
    SearchSampleComponent
  ],
  imports: [
    BrowserModule,
    CommonLibModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}),
    StoreModule.forFeature('searchCustomerShowHide', showHideReducer),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [SearchCustomerComponent]
})
export class SearchCustomerModule { }
