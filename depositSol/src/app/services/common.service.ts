import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  constructor() { }

  getBase64(rawString: string) {
    return window.btoa(rawString);
  }
}
