import {Component, forwardRef, Input, OnChanges, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {IssueCardService} from '../comman/issue-card/issue-card.service';
import {backendURL} from '../../constants/global.constant';
import {PersistenceService} from 'angular-persistence';

@Component({
  selector: 'app-ds-open-issue',
  templateUrl: './open-issue.component.html',
  styleUrls: ['./open-issue.component.css']
})
export class OpenIssueComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,
              private _issueCardService: IssueCardService,
              private _persistenceService: PersistenceService) {}

  openIssueForm: FormGroup;
  formValues: any;
  labelList: any = [];
  assigneList: any = [];
  labelSearchKey = 'name';
  assigneeSearchKey = 'login';
  labelId: string;
  assigneeId: string;
  filterLabel: string;
  filterAssignee: string;
  private innerValue: any = '';

  ngOnInit() {
    this.filterLabel = 'Filter Labels: ';
    this.filterAssignee = 'Filter Assignee: ';
    this.labelId = 'labelId';
    this.assigneeId = 'assigneeId';
    this._issueCardService.getAllLabels$(backendURL.labels).subscribe(
      success => {
        this.labelList = success;
      },
      error => {}
    );
    this._issueCardService.getAllAssignes$(backendURL.assignees).subscribe(
      success => {
        this.assigneList = success;
      },
      error => {}
    );
    this.openIssueForm = new FormGroup({
      title: new FormControl('', Validators.required),
      body: new FormControl(),
      milestone: new FormControl(),
      labels: new FormControl(),
      assignees: new FormControl(),
    });
  }

  collectLists(event) {
    event.forEach(
      index => {
        switch (index.calledBy) {
          case 'labelId':
            this.openIssueForm.controls['labels'].setValue(event);
            console.log(index.name);
            break;
          case 'assigneeId':
            this.openIssueForm.controls['assignees'].setValue(event);
            break;
          case 'sortId':
            this.openIssueForm.controls['milestone'].setValue(event);
            break;
        }
      }
    );
  }
}
