import {Component, OnDestroy, OnInit} from '@angular/core';
import {backendURL} from '../../../constants/global.constant';
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
  repoName: string;
  repoHTMLURL: string;
  repo: any = {};

  ngOnInit() {
    this.repo = this._repoDetailService.getRepoDetails$(backendURL.repository).subscribe(
      success => {
        this.starCount = success['stargazers_count'];
        this.subscribers = success['subscribers_count'];
        this.forkCount = success['forks_count'];
        this.organization = success['organization'];
        this.repoName = success['name'];
        this.repoHTMLURL = success['html_url'];
        console.log(success);
        },
      error => {console.log('error', error); }
    );

    this._issueCardService.getIssueCount.subscribe(
      count => {
        this.openIssuesCount = count;
      }
    );
  }

  ngOnDestroy() {
    this.repo.unsubscribe();
  }

}
