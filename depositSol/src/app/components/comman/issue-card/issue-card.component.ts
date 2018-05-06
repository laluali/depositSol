import {Component, Input, OnInit, Output} from '@angular/core';
import {IssueCard} from './issue-card';
import {backendURL, dsImage} from '../../../constants/global.constant';
import {StarRepoService} from '../star-repo/star-repo.service';
import {IssueCardService} from './issue-card.service';
import {TagService} from '../tag/tag.service';

@Component({
  selector: 'app-ds-issue-card',
  templateUrl: './issue-card.component.html',
  styleUrls: ['./issue-card.component.css']
})
export class IssueCardComponent implements OnInit, IssueCard {

  constructor(private _issueCardService: IssueCardService,
              private _tagService: TagService) { }

  title: string;
  labels: any;
  number: number;
  user: any;
  milestone: any;
  comments: number;
  @Input() cardList: IssueCard[];
  filterList: any = [];
  @Output() labelList: any = [];
  url: string;
  labelsUrl: string;
  tagList: any;
  imageURL: string = dsImage.comment;
  issueImage: string = dsImage.issue;
  dropDownLabel: string;
  defaultFilter = 'repo:angular/angular.js+type:issue+state:open';
  ngOnInit() {
    this.getIssues();
    this._issueCardService.getIssueEvent.subscribe(
      params => this.getIssues(params),
      error => console.log(error),
    );
    this._issueCardService.getAllLabels$(backendURL.labels).subscribe(
      success => {
        this.labelList = success;
      },
      error => { console.log(error); }// to be handled
    );
    this.dropDownLabel = 'Filter Label';
  }

  getIssues(params?: string) {
    this._issueCardService.getIssues$(backendURL.searchIssues, params ? params : this.defaultFilter).subscribe(
      success => {
        this.cardList = success['items'];
        this._issueCardService.getIssueCount.emit(success['total_count']);
      },
      error => { console.log(error); }// to be handled
    );
  }

  getAllFilters() {
    this.filterList.push('is:issue');
    this.filterList.push('is:pr');
    this.filterList.push('in:title');
    this.filterList.push('in:body');
    this.filterList.push('in:comments');
    this.filterList.push('is:open');
    this.filterList.push('is:closed');
    this.filterList.push('label:LABEL');
    this.filterList.push('milestone:MILESTONE');
    this.filterList.push('no:label');
    this.filterList.push('no:milestone');
  }
}
