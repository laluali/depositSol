import {AfterViewChecked, AfterViewInit, Component, forwardRef, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {IssueCardService} from '../comman/issue-card/issue-card.service';
import {backendURL, dsImage, FORM_MODE} from '../../constants/global.constant';
import {OpenIssueService} from './open-issue.service';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-ds-open-issue',
  templateUrl: './open-issue.component.html',
  styleUrls: ['./open-issue.component.css']
})
export class OpenIssueComponent implements OnInit, OnDestroy{

  constructor(private _formBuilder: FormBuilder,
              private _issueCardService: IssueCardService,
              private _openIssueService: OpenIssueService,
              private router: Router,
              private route: ActivatedRoute) {}

  openIssueForm: FormGroup;
  refIssueForm: FormGroup;
  formValues: any;
  labelList: any = [];
  filteredLabelList: any = [];
  filterSort: string;
  labelsOnIssue: any = [];
  milestonesOnIssue: any = [];
  assigneesOnIssue: any = [];
  assigneeList: any = [];
  milestoneList: any = [];
  labelSearchKey = 'name';
  assigneeSearchKey = 'login';
  milestoneSearchKey = 'title';
  labelId: string;
  assigneeId: string;
  filterLabel: string;
  filterAssignee: string;
  filterMilestone: string;
  private labelsSubscription: any;
  private assigneeSubscription: any;
  private milestoneSubscription: any;
  private innerValue: any = '';
  private routeSub: any;
  formMode: string;
  issueDetailSubscribe: any;
  issueId: number;
  sortId: string;
  milestoneId: string;
  filteredAssigneeList: any = [];
  filteredMilestoneList: any = [];
  editImg: string;
  saveImg: string;
  cancelImg: string;
  ngOnInit() {
    this.route.params.subscribe( params => {
      this.issueId = params['issueId'];
      if ( params['issueId']) {
        this.getIssueDetail(this.issueId);
        this.formMode = FORM_MODE.DISPLAY;
      }
    });
    this.editImg = dsImage.edit;
    this.saveImg = dsImage.save;
    this.cancelImg = dsImage.cross;
    this.labelsSubscription = this._issueCardService.getAllLabels$(backendURL.labels).subscribe(
      success => {
        this.labelList = success;
      },
      error => {}
    );
    this.assigneeSubscription = this._issueCardService.getAllAssignes$(backendURL.assignees).subscribe(
      success => {
        this.assigneeList = success;
      },
      error => {}
    );
    this.milestoneSubscription = this._issueCardService.getAllMilestones$(backendURL.milestones).subscribe(
      success => {
        this.milestoneList = success;
      },
      error => {}
    );
    this.filterLabel = 'Filter Labels: ';
    this.filterAssignee = 'Filter Assignee: ';
    this.filterSort = 'Sort By: ';
    this.filterMilestone = 'Filter Milestone: ';
    this.labelId = 'labelId';
    this.assigneeId = 'assigneeId';
    this.sortId = 'sortId';
    this.milestoneId = 'milestoneId'
    if (this.issueId === undefined || this.issueId === null) {
      this.formMode = FORM_MODE.CREATE;
      this.filterLabel = 'Filter Labels: ';
      this.filterAssignee = 'Filter Assignee: ';
      this.labelId = 'labelId';
      this.assigneeId = 'assigneeId';
      this.milestoneId = 'milestoneId';
    }
    this.openIssueForm = new FormGroup({
      title: new FormControl('', Validators.required),
      body: new FormControl(),
      milestone: new FormControl(),
      labels: new FormControl(),
      assignees: new FormControl(),
      state: new FormControl('open')
    });
    this.refIssueForm = new FormGroup({
      title: new FormControl('', Validators.required),
      body: new FormControl(),
      milestone: new FormControl(),
      labels: new FormControl(),
      assignees: new FormControl(),
      state: new FormControl('open')
    });
  }

  filteredLabels(labelList) {
    this.openIssueForm.controls['labels'].setValue(labelList);
  }

  filteredAssingnee(assigneeList) {
    this.openIssueForm.controls['assignees'].setValue(assigneeList);
  }

  filteredMilestones(milestoneList) {
    this.openIssueForm.controls['milestone'].setValue(milestoneList);
  }

  submitForm() {
    if (this.formMode === FORM_MODE.CREATE) {
      if (this.openIssueForm.controls['labels'].value != null) {
        this.openIssueForm.controls['labels'].value.forEach(
          label => {
            this.filteredLabelList.push(label[this.labelSearchKey]);
          }
        );
      }
      if (this.openIssueForm.controls['assignees'].value != null) {
        this.openIssueForm.controls['assignees'].value.forEach(
          assignee => {
            this.filteredAssigneeList.push(assignee[this.assigneeSearchKey]);
          }
        );
      }
      if (this.openIssueForm.controls['milestone'].value != null) {
        this.openIssueForm.controls['milestone'].value.forEach(
          milestone => {
            this.filteredMilestoneList.push(milestone[this.milestoneSearchKey]);
          }
        );
      }
      this.openIssueForm.controls['labels'].setValue(this.filteredLabelList);
      this.openIssueForm.controls['assignees'].setValue(this.filteredAssigneeList);
      this.openIssueForm.controls['milestone'].setValue((this.filteredMilestoneList.length > 0) ? this.filteredMilestoneList : null);
      this._openIssueService.postNewIssue$(backendURL.issues, this.openIssueForm.value).subscribe(
        success => {
          console.log(success);
          this.router.navigate(['']);
        },
        error => {console.log(error); }
      );
    } else {
      this._openIssueService.updateIssue$(this.issueId, backendURL.issues, this.openIssueForm.value).subscribe(
        success => {
          console.log(success);
          this.router.navigate(['home']);
        },
        error => {console.log(error); }
      );
    }
  }

  ngOnDestroy() {
    this.labelsSubscription.unsubscribe();
    this.assigneeSubscription.unsubscribe();
    this.milestoneSubscription.unsubscribe();
  }

  getIssueDetail(issueId: number) {
    this.issueDetailSubscribe = this._openIssueService.getIssueDetail$(issueId).subscribe(
      success => {
          this.openIssueForm.controls['title'].setValue(success['title'] ? success['title'] : '');
          this.openIssueForm.controls['body'].setValue(success['body'] ? success['body'] : '');
          this.labelsOnIssue = success['labels'] ? success['labels'] : [];
           this.openIssueForm.controls['labels'].setValue(this.labelsOnIssue);
          this.milestonesOnIssue = success['milestone'] ? success['milestone'] : [];
          this.openIssueForm.controls['milestone'].setValue(this.milestonesOnIssue);
          this.assigneesOnIssue = success['assignees'] ? success['assignees'] : [];
          this.openIssueForm.controls['assignees'].setValue(this.assigneesOnIssue);
          this.refIssueForm = this.openIssueForm;
        },
      error => {}
    );
  }

  changeFormMode() {
    this.labelList.forEach(
      label => {
        this.labelsOnIssue.forEach(
          lab => {
            if (label.id === lab.id) {
              this.labelList.splice(this.labelList.indexOf(label), 1);
            }
          }
        );
      }
    );
    this.assigneeList.forEach(
      assignee => {
        this.assigneesOnIssue.forEach(
          aoi => {
            if (assignee.id === aoi.id) {
              this.assigneeList.splice(this.assigneeList.indexOf(assignee), 1);
            }
          }
        );
      }
    );
    this.milestoneList.forEach(
      milestone => {
        this.milestonesOnIssue.forEach(
          moi => {
            if (milestone.id === moi.id) {
              this.milestoneList.splice(this.milestoneList.indexOf(milestone), 1);
            }
          }
        );
      }
    );
    this.formMode = FORM_MODE.EDIT;
  }

  cancelFn() {
    this.openIssueForm = this.refIssueForm;
    // logic to refill form to original state
    this.formMode = FORM_MODE.DISPLAY;
  }
}
