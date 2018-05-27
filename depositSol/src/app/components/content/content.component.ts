import { Component, OnInit } from '@angular/core';
import {appHeaders, backendURL, gitHubUser, repoSort, userLogin} from '../../constants/global.constant';
import {IssueCardService} from '../comman/issue-card/issue-card.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {CommonService} from '../../services/common.service';

@Component({
  selector: 'app-ds-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  animations: [trigger(
    'openClose',
    [
      state('collapsed, void', style({display: 'none'})),
      state('expanded', style({height: '*', width: '100%'})),
      transition(
        'collapsed => expanded', [
          animate('300ms ease-in', style({  opacity: 1}))
        ]
      ),
      transition(
        'expanded => collapsed', [
          animate('300ms ease-out', style({opacity: 0}))
        ]
      )
    ])
  ],
})
export class ContentComponent implements OnInit {

  constructor(private _issueCardService: IssueCardService, private _commonService: CommonService) { }

  filterLabel: string;
  filterAssignee: string;
  filterSort: string;
  labelList: any = [];
  assigneList: any = [];
  sortList: any = [];
  labelId: string;
  assigneeId: string;
  sortId: string;
  labelSearchKey = 'name';
  assigneeSearchKey = 'login';
  sortSearchKey = 'name';
  filterStateExpression: string;
  sortStateExpression: string;
  modalContent: string;
  col1: string;
  col3: string;
  bodyElement: any;

  ngOnInit() {
    this.filterLabel = 'Filter Labels: ';
    this.filterAssignee = 'Filter Assignee: ';
    this.filterSort = 'Sort By: ';
    this.labelId = 'labelId';
    this.assigneeId = 'assigneeId';
    this.sortId = 'sortId';
    this.modalContent = '';
    setTimeout( () => {
      if (screen.width >= 768) {
        this.filterStateExpression = 'expanded';
        this.sortStateExpression = 'expanded';
      } else {
        this.filterStateExpression = 'collapsed';
        this.sortStateExpression = 'collapsed';
        this.col1 = 'col1';
        this.col3 = 'col3';
        this.modalContent = 'modal-content';
      }
    }, 0);

    this._issueCardService.labelList.subscribe(
      success => {
        this.labelList = success;
      },
      error => {}
    );

    this._issueCardService.assigneeList.subscribe(
      success => {
        this.assigneList = success;
      },
      error => {}
    );

    this.sortList.push(repoSort['interactions-asc']);
    this.sortList.push(repoSort['interactions-desc']);
    this.sortList.push(repoSort['updated-asc']);
    this.sortList.push(repoSort['updated-desc']);
  }

  showFilterPane( toggleState: string) {
    this.col1 = (this.col1 === 'col1') ? 'modal' : 'col1';
    this.filterStateExpression = (toggleState === 'collapsed') ? 'expanded' : 'collapsed';
    this.bodyElement = document.querySelector('body');
    this.bodyElement.style['overflow'] = (toggleState === 'collapsed') ? 'hidden' : '';
    this._commonService.preventBodyScroll((toggleState === 'collapsed') ? false : true);
  }

  showSortPane( toggleState: string) {
    this.col3 = (this.col3 === 'col3') ? 'modal' : 'col3';
    this.sortStateExpression = (toggleState === 'collapsed') ? 'expanded' : 'collapsed';
    this.bodyElement = document.querySelector('body');
    this.bodyElement.style['overflow'] = (toggleState === 'collapsed') ? 'hidden' : '';
    this._commonService.preventBodyScroll((toggleState === 'collapsed') ? false : true);
  }
}
