import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {appHeaders, backendURL, gitHubUser, userLogin} from '../../constants/global.constant';
import {HttpHeaders} from '@angular/common/http';
import {CommonService} from '../../services/common.service';

@Component({
  selector: 'app-ds-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private _backendService: BackendService,
              public _commonService: CommonService) { }

  headers: any = new HttpHeaders({});

  ngOnInit() {
    this.headers.append('Authorization', appHeaders.Authorization + userLogin());
    this.headers.append('Content-Type', appHeaders.ContentTypeJSON);
    this._backendService.doGet(backendURL.issues, this.headers).subscribe(
      success => console.log(success),
      error => console.log(error)
    );
  }

}
