import {Component, OnDestroy, OnInit} from '@angular/core';
import {backendURL, dsImage} from '../../../constants/global.constant';
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
  orgURL: string;
  orgLogin: string;
  repoName: string;
  repoHTMLURL: string;
  repoSub: any = {};
  repoImg: string;
  closedIssuesCount: string;
  openIssueSub: any = {};
  closedIssueSub: any = {};
  addIssueImg: string;

  ngOnInit() {
    this.repoImg = dsImage.repo;
    this.addIssueImg = dsImage.plus;
    this.repoSub = this._repoDetailService.getRepoDetails$(backendURL.repository).subscribe(
      success => {
        this.starCount = success['stargazers_count'];
        this.subscribers = success['subscribers_count'];
        this.forkCount = success['forks_count'];
        this.organization = success['organization'] ? success['organization'] : success['owner'];
        this.orgURL = this.organization.html_url;
        this.orgLogin = this.organization.login;
        this.repoName = success['name'];
        this.repoHTMLURL = success['html_url'];
        },
      error => {console.log('error', error); }
    );
    this.openIssueSub = this._repoDetailService.getOpenIssueCount$().subscribe(
      count => {
        this.openIssuesCount = count['total_count'];
      }
    );
    this.closedIssueSub = this._repoDetailService.getClosedIssueCount$().subscribe(
      count => {
        this.closedIssuesCount = count['total_count'];
      }
    );
  }

  ngOnDestroy() {
    this.repoSub.unsubscribe();
    this.openIssueSub.unsubscribe();
    this.closedIssueSub.unsubscribe();
  }

}
