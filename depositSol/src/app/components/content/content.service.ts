import { Injectable } from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {backendURL} from '../../constants/global.constant';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ContentService {

  constructor(private _backendService: BackendService) { }
  getIssues$(backendURL: string): Observable<any> {
    return this._backendService.doGet(backendURL)
      .map(
        (res: Response) => {
          return res;
        }
      );
  }
}
