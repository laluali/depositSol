import { Component, OnInit } from '@angular/core';
import {IssueCard} from './issue-card';
import {backendURL} from '../../../constants/global.constant';
import {StarRepoService} from '../star-repo/star-repo.service';
import {IssueCardService} from './issue-card.service';

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
  cardList: IssueCard[];
  url: string;
  labelsUrl: string;

  ngOnInit() {
    this._issueCardService.getIssues$(backendURL.issues).subscribe(
      success => {
        this.cardList = success;
      },
      error => { console.log(error); }// need to handle
    );
  }
}
