import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {RepoDetail} from './repo-detail';
import {Observable} from 'rxjs/Observable';
import {backendURL, REPO} from '../../../constants/global.constant';
import {BackendService} from '../../../services/backend.service';
import 'rxjs/add/operator/map';

@Injectable()
export class RepoDetailService {

  constructor(private _backendService: BackendService) { }

  getRepoDetails$(backendURL: string): Observable<RepoDetail> {
    return this._backendService.doGet(backendURL)
      .map(
        (res: RepoDetail) => {
          return res;
        }
      );
  }

  getOpenIssueCount$(): Observable<any> {
    return this._backendService.doGet(backendURL.openIssues, 'repo:' + REPO + '+is:open')
      .map(
        (res: any) => {
          return res;
        }
      );
  }

  getClosedIssueCount$(): Observable<any> {
    return this._backendService.doGet(backendURL.closedIssues, 'repo:' + REPO + '+is:closed')
      .map(
        (res: any) => {
          return res;
        }
      );
  }
}
