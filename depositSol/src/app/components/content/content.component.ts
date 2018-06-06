import { Component, OnInit } from '@angular/core';
import {appHeaders, backendURL, gitHubUser, repoSort, userLogin} from '../../constants/global.constant';
import {IssueCardService} from '../comman/issue-card/issue-card.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {CommonService} from '../../services/common.service';

@Component({
  selector: 'app-ds-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  /*animations: [trigger(
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
  ],*/
})
export class ContentComponent implements OnInit {

  constructor(private _issueCardService: IssueCardService,
              private _commonService: CommonService) { }

  filterLabel: string;
  filterAssignee: string;
  filterSort: string;
  filterMilestone: string;
  labelList: any = [];
  assigneeList: any = [];
  milestoneList: any = [];
  sortList: any = [];
  labelId: string;
  assigneeId: string;
  sortId: string;
  milestoneId: string;
  labelSearchKey = 'name';
  assigneeSearchKey = 'login';
  milestoneSearchKey = 'title';
  sortSearchKey = 'name';
  filterStateExpression: string;
  sortStateExpression: string;
  modalContent: string;
  col1: string;
  col3: string;
  bodyElement: any;
  labelParam: string;
  sortParam: string;
  assigneeParam: string;
  milestonesParam: string;

  ngOnInit() {
    this.filterLabel = 'Filter Labels: ';
    this.filterAssignee = 'Filter Assignee: ';
    this.filterSort = 'Sort By: ';
    this.filterMilestone = 'Filter Milestone: ';
    this.labelId = 'labelId';
    this.assigneeId = 'assigneeId';
    this.sortId = 'sortId';
    this.milestoneId = 'milestoneId'
    this.modalContent = '';
    setTimeout( () => {
      if (screen.width > 768) {
        this.filterStateExpression = 'expanded';
        this.sortStateExpression = 'expanded';
        this.col1 = 'col1';
        this.col3 = 'col3';
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
        this.assigneeList = success;
      },
      error => {}
    );
    this._issueCardService.milestoneList.subscribe(
      success => {
        this.milestoneList = success;
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

  filteredLabels(labelList) {
    this.labelParam = this._commonService.getIssuesByLabel(labelList);
    this.getIssues();
  }

  filteredAssingnee(assigneeList) {
    this.assigneeParam = this._commonService.getIssuesByAssignee(assigneeList);
    this.getIssues();
  }

  filteredSorts(sortList) {
    this.sortParam = this._commonService.getIssuesBySortOrder(sortList);
    this.getIssues();
  }

  filteredMilestones(milestoneList) {
    this.milestonesParam = this._commonService.getIssuesByMilestone(milestoneList);
    this.getIssues();
  }

  getIssues() {
    this._issueCardService.getIssueEvent.emit(
      this._commonService.getSearchString(
        this.labelParam, this.sortParam, this.assigneeParam, this.milestonesParam
    ));
  }
}
