///<reference path="../../../../../node_modules/rxjs/Observable.d.ts"/>
import {ErrorHandler, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BackendService} from '../../../services/backend.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class StarRepoService {

  constructor(private _backendService: BackendService) { }

  putStar$(backendURL: string): Observable<boolean> {
    return this._backendService.doPut(backendURL)
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

  removeStar$(backendURL: string): Observable<boolean> {
    return this._backendService.doDelete(backendURL)
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

  isStar$(backendURL: string): Observable<boolean> {
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
