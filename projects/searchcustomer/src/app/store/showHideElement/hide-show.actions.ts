import { Action } from '@ngrx/store';

export enum HideShowActionTypes {
  invert = '[SearchCustomer HideShow] Invert show',
}

export class InvertHideShow implements Action {
  readonly type = HideShowActionTypes.invert;
}


export type HideShowActions = HideShowActionTypes;
