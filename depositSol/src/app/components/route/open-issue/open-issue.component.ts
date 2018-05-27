import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-ds-open-issue',
  templateUrl: './open-issue.component.html',
  styleUrls: ['./open-issue.component.css']
})
export class OpenIssueComponent implements OnInit {

  constructor() { }

  openIssueForm: FormGroup;

  ngOnInit() {
    this.openIssueForm = new FormGroup({
      title: new FormControl(),
      body: new FormControl(),
      milestone: new FormControl(),
      labels: new FormControl(),
      assignees: new FormControl(),
    });
  }

}
