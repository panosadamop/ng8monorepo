import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {selectShowValue} from '../store';
import {InvertHideShow} from '../store/showHideElement/hide-show.actions';

@Component({
  selector: 'app-searchsample',
  templateUrl: './searchsample.component.html',
  styleUrls: ['./searchsample.component.scss']
})
export class SearchsampleComponent implements OnInit {

  showAdmin = true;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.select(selectShowValue).subscribe((value) => {
      this.showAdmin = value;
    });
  }

  toggleAdminShow() {
    this.store.dispatch(new InvertHideShow());
  }

}
