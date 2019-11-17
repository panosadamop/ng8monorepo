import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchCustomerComponent} from './app.component';
import { SearchsampleComponent } from './searchsample/searchsample.component';
import {CommonLibModule} from '../../../common-lib/src/lib/common-lib.module';
import { StoreModule } from '@ngrx/store';
import {showHideReducer} from './store/showHideElement/hide-show.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

const routes: Routes = [
  { path: '', component: SearchsampleComponent }
];

@NgModule({
  declarations: [
    SearchCustomerComponent,
    SearchsampleComponent
  ],
  imports: [
    BrowserModule,
    CommonLibModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}),
    StoreModule.forFeature('searchcustomerShowHide', showHideReducer),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [SearchCustomerComponent]
})
export class AppModule { }
