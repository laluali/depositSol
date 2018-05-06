import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BackendService} from '../../../services/backend.service';

@Injectable()
export class ForkRepoService {

  constructor(private _backendService: BackendService) { }
  isFork$(backendURL: string): Observable<boolean> {
    return this._backendService.doGet(backendURL)
      .map(
        (res: Response) => {
          return true;
        }
      )
      .catch(
        (error: any) => {
          return Observable.throw(error);
        }
      );
  }
}
