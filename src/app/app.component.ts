import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {InvertHideShow as InvertHideShowSearchCustomer} from '../../projects/searchcustomer/src/app/store/showHideElement/hide-show.actions';
import {InvertHideShow as InvertHideShowCustomerPosition} from '../../projects/customerposition/src/app/store/showHideElement/hide-show.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myNBG';

  constructor(private store: Store<any>) {

  }

  toggleSearchCustomer() {
    this.store.dispatch(new InvertHideShowSearchCustomer());
  }

  toggleCustomerPosition() {
    this.store.dispatch(new InvertHideShowCustomerPosition());
  }

}
