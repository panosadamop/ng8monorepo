import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {CommonLibModule} from '../../../common-lib/src/lib/common-lib.module';
import { CustomerPositionComponent } from './app.component';
import { PositionSampleComponent } from './positionsample/positionsample.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {showHideReducer} from './store/showHideElement/hide-show.reducer';
import {environment} from '../environments/environment';

const routes: Routes = [
  { path: '', component: CustomerPositionComponent }
];

@NgModule({
  declarations: [
    CustomerPositionComponent,
    PositionSampleComponent
  ],
  imports: [
    BrowserModule,
    CommonLibModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}),
    StoreModule.forFeature('customerPositionShowHide', showHideReducer),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [CustomerPositionComponent]
})
export class CustomerPositionModule { }
