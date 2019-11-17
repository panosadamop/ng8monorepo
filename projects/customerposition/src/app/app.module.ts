import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CustomerpositionComponent } from './app.component';
import { PositionsampleComponent } from './positionsample/positionsample.component';

@NgModule({
  declarations: [
    CustomerpositionComponent,
    PositionsampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CustomerpositionComponent]
})
export class AppModule { }
