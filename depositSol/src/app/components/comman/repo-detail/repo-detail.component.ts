import { Component, OnInit } from '@angular/core';
import {appHeaders, backendURL, userLogin} from '../../../constants/global.constant';
import {HttpHeaders} from '@angular/common/http';
import {BackendService} from '../../../services/backend.service';
import {RepoDetail} from './repo-detail';

@Component({
  selector: 'app-ds-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.css']
})
export class RepoDetailComponent implements OnInit, RepoDetail {

  constructor(private _backendService: BackendService) { }

  headers: any = new HttpHeaders({});
  subscribers: number;
  openIssuesCount: number;
  starCount: number;
  forkCount: number;

  ngOnInit() {
    this.headers.append('Content-Type', appHeaders.ContentTypeJSON);
    this.headers.append('Authorization', appHeaders.Authorization + userLogin());
    this._backendService.doGet(backendURL.repository, this.headers).subscribe(
      success => {
        this.starCount = success['stargazers_count'];
        this.subscribers = success['subscribers_count'];
        this.forkCount = success['forks_count'];
        this.openIssuesCount = success['open_issues_count'];
        },
      error => console.log(error)
    );
  }

}
