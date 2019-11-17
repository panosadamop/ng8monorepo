import { NgModule } from '@angular/core';

import {CustomerPositionComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CommonLibModule} from '../../../common-lib/src/lib/common-lib.module';
import {StoreModule} from '@ngrx/store';
import {showHideReducer} from './store/showHideElement/hide-show.reducer';
import {PositionSampleComponent} from './positionsample/positionsample.component';

const routes: Routes = [
  { path: '', component: CustomerPositionComponent }
];


@NgModule({
  declarations: [
    CustomerPositionComponent,
    PositionSampleComponent
  ],
  imports: [
    CommonModule,
    CommonLibModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('positionSampleShowHide', showHideReducer),
  ],
  providers: [],
  bootstrap: [CustomerPositionComponent]
})
export class CustomerPositionModule { }
