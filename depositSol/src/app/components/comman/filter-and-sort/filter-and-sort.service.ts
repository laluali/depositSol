import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()
export class FilterAndSortService {

  constructor() { }

  @Output() closePane: EventEmitter<boolean> = new EventEmitter(true);
  @Output() expandPane: EventEmitter<boolean> = new EventEmitter(true);
}
