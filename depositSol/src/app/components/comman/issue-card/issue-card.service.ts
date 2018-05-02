import { Injectable } from '@angular/core';
import {backendURL} from '../../../constants/global.constant';
import {Observable} from 'rxjs/Observable';
import {BackendService} from '../../../services/backend.service';
import {IssueCard} from './issue-card';
@Injectable()
export class IssueCardService {

  constructor(private _backendService: BackendService) { }

  getIssues$(backendURL: string): Observable<IssueCard[]> {
    return this._backendService.doGet(backendURL)
      .map(
        (res: any) =>  <IssueCard[]> res
      )
      .catch(
        (error: any) => {
          return Observable.throw(error);
        }
      );
  }
}
