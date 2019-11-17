import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {InvertHideShow} from '../store/showHideElement/hide-show.actions';
import {selectShowValue} from '../store';

@Component({
  selector: 'app-positionsample',
  templateUrl: './positionsample.component.html',
  styleUrls: ['./positionsample.component.scss']
})
export class PositionSampleComponent implements OnInit {
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
