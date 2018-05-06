import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()
export class TagService {

  constructor() { }
  @Output() selectTag = new EventEmitter<string>();
  @Output() unSelectTag = new EventEmitter<string>();
}
