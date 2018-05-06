import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BackendService} from '../../../services/backend.service';

@Injectable()
export class WatchService {

  constructor(private _backendService: BackendService) { }

  putWatch$(backendURL: string, body?:any ): Observable<boolean> {
    return this._backendService.doPut(backendURL, body)
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

  removeWatch$(backendURL: string): Observable<boolean> {
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

  isWatch$(backendURL: string): Observable<boolean> {
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
