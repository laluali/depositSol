import {Component, OnDestroy, OnInit} from '@angular/core';
import {backendURL, dsImage} from '../../../constants/global.constant';
import {RepoDetail} from './repo-detail';
import {RepoDetailService} from './repo-detail.service';
import {IssueCardService} from '../issue-card/issue-card.service';

@Component({
  selector: 'app-ds-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.css']
})
export class RepoDetailComponent implements OnInit, RepoDetail, OnDestroy {

  constructor(private _repoDetailService: RepoDetailService,
              private _issueCardService: IssueCardService) { }

  subscribers: number;
  openIssuesCount: number;
  starCount: number;
  forkCount: number;
  organization: any;
  orgURL: string;
  orgLogin: string;
  repoName: string;
  repoHTMLURL: string;
  repo: any = {};
  repoImg: string;
  closedIssuesCount: string;

  ngOnInit() {
    this.repoImg = dsImage.repo;
    this.repo = this._repoDetailService.getRepoDetails$(backendURL.repository).subscribe(
      success => {
        this.starCount = success['stargazers_count'];
        this.subscribers = success['subscribers_count'];
        this.forkCount = success['forks_count'];
        this.organization = success['organization'];
        this.orgURL = this.organization.html_url;
        this.orgLogin = this.organization.login;
        this.repoName = success['name'];
        this.repoHTMLURL = success['html_url'];
        },
      error => {console.log('error', error); }
    );

    this._repoDetailService.getOpenIssueCount$().subscribe(
      count => {
        this.openIssuesCount = count['total_count'];
      }
    );

    this._repoDetailService.getClosedIssueCount$().subscribe(
      count => {
        this.closedIssuesCount = count['total_count'];
      }
    );
  }

  ngOnDestroy() {
    this.repo.unsubscribe();
  }

}
