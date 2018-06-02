import {EventEmitter, Injectable, Input, Output} from '@angular/core';
import {IssueCard} from '../comman/issue-card/issue-card';
import {Observable} from 'rxjs/Observable';
import {BackendService} from '../../services/backend.service';
import {backendURL} from '../../constants/global.constant';

@Injectable()
export class OpenIssueService {

  constructor(private _backendService: BackendService) {}

  @Output() prefillFilteredList: EventEmitter<any[]> = new EventEmitter<any[]>(true);
  @Output() prefillSelectList: EventEmitter<any[]> = new EventEmitter<any[]>(true);

  postNewIssue$( backendURL: string, body?: string): Observable<IssueCard[]> {
    return this._backendService.doPost(backendURL, body)
      .map(
        (res) =>  <IssueCard[]> res
      )
      .catch(
        (error: any) => {
          return Observable.throw(error);
        }
      );
  }

  updateIssue$( issueId: number, backendURL: string, body?: string): Observable<IssueCard[]> {
    return this._backendService.doPatch(backendURL + '/' + issueId, body)
      .map(
        (res) =>  <IssueCard[]> res
      )
      .catch(
        (error: any) => {
          return Observable.throw(error);
        }
      );
  }

  getIssueDetail$(issueId: number) {
    return this._backendService.doGet(backendURL.issues + '/' + issueId)
      .map(
        (res) =>  <IssueCard[]> res
      )
      .catch(
        (error: any) => {
          return Observable.throw(error);
        }
      );
  }
}
