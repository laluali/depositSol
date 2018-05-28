import {EventEmitter, Injectable, Output} from '@angular/core';
import {backendURL} from '../../../constants/global.constant';
import {Observable} from 'rxjs/Observable';
import {BackendService} from '../../../services/backend.service';
import {IssueCard} from './issue-card';
@Injectable()
export class IssueCardService {

  constructor(private _backendService: BackendService) { }

  @Output() getIssueCount = new EventEmitter<number>();
  @Output() getIssueEvent = new EventEmitter<string>();
  @Output() labelList = new EventEmitter<any>();
  @Output() assigneeList = new EventEmitter<any>();
  @Output() milestoneList = new EventEmitter<any>();

  getIssues$( backendURL: string, params?: string): Observable<IssueCard[]> {
    return this._backendService.doGet(backendURL, params)
      .map(
        (res) =>  <IssueCard[]> res
      )
      .catch(
        (error: any) => {
          return Observable.throw(error);
        }
      );
  }

  getAllLabels$( backendURL: string, params?: string): Observable<IssueCard[]> {
    return this._backendService.doGet(backendURL, params)
      .map(
        (res) => res
      )
      .catch(
        (error: any) => {
          return Observable.throw(error);
        }
      );
  }

  getAllAssignes$( backendURL: string, params?: string): Observable<any> {
    return this._backendService.doGet(backendURL, params)
      .map(
        (res) => res
      )
      .catch(
        (error: any) => {
          return Observable.throw(error);
        }
      );
  }

  getAllMilestones$( backendURL: string, params?: string): Observable<any> {
    return this._backendService.doGet(backendURL, params)
      .map(
        (res) => res
      )
      .catch(
        (error: any) => {
          return Observable.throw(error);
        }
      );
  }
}
