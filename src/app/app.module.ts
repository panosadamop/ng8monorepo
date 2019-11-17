import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { WrappercomponentComponent } from './wrappercomponent/wrappercomponent.component';
import {CommonLibModule} from '../../projects/common-lib/src/lib/common-lib.module';



@NgModule({
  declarations: [
    AppComponent,
    WrappercomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    CommonLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
