import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()
export class LoaderService {

  constructor() { }

  @Output() showLoader = new EventEmitter<boolean>();

}
