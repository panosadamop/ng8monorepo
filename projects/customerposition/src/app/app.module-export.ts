import { NgModule } from '@angular/core';

import {CustomerPositionComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { SearchsampleComponent } from './positionsample/searchsample.component';
import {CommonLibModule} from '../../../common-lib/src/lib/common-lib.module';
import {StoreModule} from '@ngrx/store';
import {showHideReducer} from './store/showHideElement/hide-show.reducer';

const routes: Routes = [
  { path: '', component: SearchsampleComponent }
];


@NgModule({
  declarations: [
    CustomerPositionComponent,
    SearchsampleComponent
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
