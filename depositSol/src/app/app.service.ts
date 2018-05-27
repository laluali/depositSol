import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()
export class AppService {

  constructor() { }
  @Output() scrollBody: EventEmitter<boolean> = new EventEmitter(true);
}
