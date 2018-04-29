import { Component, OnInit } from '@angular/core';
import {IssueCard} from './issue-card';

@Component({
  selector: 'app-ds-issue-card',
  templateUrl: './issue-card.component.html',
  styleUrls: ['./issue-card.component.css']
})
export class IssueCardComponent implements OnInit, IssueCard {

  constructor() { }

  ngOnInit() {

  }
}
