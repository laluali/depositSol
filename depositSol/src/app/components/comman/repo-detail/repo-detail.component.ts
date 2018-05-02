import {Component, OnDestroy, OnInit} from '@angular/core';
import {appHeaders, backendURL, userLogin} from '../../../constants/global.constant';
import {HttpHeaders} from '@angular/common/http';
import {BackendService} from '../../../services/backend.service';
import {RepoDetail} from './repo-detail';
import {RepoDetailService} from './repo-detail.service';

@Component({
  selector: 'app-ds-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.css']
})
export class RepoDetailComponent implements OnInit, RepoDetail, OnDestroy {

  constructor(private _repoDetailService: RepoDetailService) { }

  subscribers: number;
  openIssuesCount: number;
  starCount: number;
  forkCount: number;
  organization: any;
  repoName: string;
  repoHTMLURL: string;
  repo: any = {};
  ngOnInit() {

    this.repo = this._repoDetailService.getRepoDetails$(backendURL.repository).subscribe(
      success => {
        this.starCount = success['stargazers_count'];
        this.subscribers = success['subscribers_count'];
        this.forkCount = success['forks_count'];
        this.openIssuesCount = success['open_issues_count'];
        this.organization = success['organization'];
        this.repoName = success['name'];
        this.repoHTMLURL = success['html_url'];
        console.log(success);
        },
      error => {console.log('error', error); }
    );
    /*this._backendService.doGet(backendURL.repository, this.headers).subscribe(
      success => {
        this.starCount = success['stargazers_count'];
        this.subscribers = success['subscribers_count'];
        this.forkCount = success['forks_count'];
        this.openIssuesCount = success['open_issues_count'];
        this.organization = success['organization'];
        this.repoName = success['name'];
        this.repoHTMLURL = success['html_url'];
        },
      error => console.log(error)
    );*/
  }

  ngOnDestroy() {
    this.repo.unsubscribe();
  }

}
