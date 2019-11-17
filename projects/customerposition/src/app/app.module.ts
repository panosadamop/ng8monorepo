import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CustomerPositionComponent } from './app.component';
import { PositionSampleComponent } from './positionsample/positionsample.component';

@NgModule({
  declarations: [
    CustomerPositionComponent,
    PositionSampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CustomerPositionComponent]
})
export class CustomerPositionModule { }
