import {Component, Input, OnInit, Output} from '@angular/core';
import {IssueCard} from './issue-card';
import {backendURL, dsImage, REPO} from '../../../constants/global.constant';
import {IssueCardService} from './issue-card.service';
import {TagService} from '../tag/tag.service';

@Component({
  selector: 'app-ds-issue-card',
  templateUrl: './issue-card.component.html',
  styleUrls: ['./issue-card.component.css']
})
export class IssueCardComponent implements OnInit, IssueCard {

  constructor(private _issueCardService: IssueCardService) { }

  title: string;
  labels: any;
  number: number;
  user: any;
  milestone: any;
  comments: number;
  filterList: any = [];
  url: string;
  labelsUrl: string;
  tagList: any;
  imageURL: string = dsImage.comment;
  issueImage: string = dsImage.issue;
  dropDownLabel: string;
  defaultFilter = 'repo:' + REPO + '+is:issue+is:open';
  openIssuesCount: number;
  @Input() cardList: IssueCard[];
  @Output() labelList: any = [];

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
    this.dropDownLabel = 'Filter Label';
  }

  getIssues(params?: string) {
    this._issueCardService.getIssues$(backendURL.searchIssues, params ? params : this.defaultFilter).subscribe(
      success => {
        this.cardList = success['items'];
        this.openIssuesCount = success['total_count'];
        // this._issueCardService.getIssueCount.emit(success['total_count']);
      },
      error => { console.log(error); }// to be handled
    );
  }

  createIssue() {

  }
}
