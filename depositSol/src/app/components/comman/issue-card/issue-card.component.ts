import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {IssueCard} from './issue-card';
import {backendURL, dsImage, REPO} from '../../../constants/global.constant';
import {IssueCardService} from './issue-card.service';
import {TagService} from '../tag/tag.service';
import {CommonService} from '../../../services/common.service';
import {RepoDetailService} from '../repo-detail/repo-detail.service';

@Component({
  selector: 'app-ds-issue-card',
  templateUrl: './issue-card.component.html',
  styleUrls: ['./issue-card.component.css']
})
export class IssueCardComponent implements OnInit, IssueCard, OnDestroy {

  constructor(private _issueCardService: IssueCardService,
              private _commonService: CommonService,
              private _repoDetailService: RepoDetailService) { }

  title: string;
  labels: any;
  number: number;
  user: any;
  milestone: any;
  comments: number;
  filterList: any = [];
  labelSearchKey = 'name';
  url: string;
  labelsUrl: string;
  tagList: any;
  imageURL: string = dsImage.comment;
  issueImage: string = dsImage.issue;
  dropDownLabel: string;

  @Input() cardList: IssueCard[];
  @Output() labelList: any = [];

  private issueSubscription: any;

  ngOnInit() {
    this.getIssues();
    this._issueCardService.getIssueEvent.subscribe(
      params => this.getIssues(params),
      error => console.log(error),
    );
    this._issueCardService.getAllLabels$(backendURL.labels).subscribe(
      success => {
        this._issueCardService.labelList.emit(success);
      },
      error => { console.log(error); }// to be handled
    );
    this._issueCardService.getAllAssignes$(backendURL.assignees).subscribe(
      success => {
        this._issueCardService.assigneeList.emit(success);
      },
      error => { console.log(error); }// to be handled
    );
    this._issueCardService.getAllMilestones$(backendURL.milestones).subscribe(
      success => {
        this._issueCardService.milestoneList.emit(success);
      },
      error => { console.log(error); }// to be handled
    );
    this.dropDownLabel = 'Filter Label';
  }

  ngOnDestroy() {
    this.issueSubscription.unsubscribe();
  }

  getIssues(params?: string) {
    this.issueSubscription = this._issueCardService.getIssues$(backendURL.searchIssues, params ? params : this._commonService.getSearchString()).subscribe(
      success => {
        this.cardList = success['items'];
      },
      error => { console.log(error); }// to be handled
    );
  }
}
