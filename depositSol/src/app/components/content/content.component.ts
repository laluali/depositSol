import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {appHeaders, backendURL, gitHubUser, userLogin} from '../../constants/global.constant';
import {HttpHeaders} from '@angular/common/http';
import {CommonService} from '../../services/common.service';
import {ContentService} from './content.service';

@Component({
  selector: 'app-ds-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
