import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../../services/common.service';
import {BackendService} from '../../../services/backend.service';
import {backendURL} from '../../../constants/global.constant';

@Component({
  selector: 'app-ds-filter-and-sort',
  templateUrl: './filter-and-sort.component.html',
  styleUrls: ['./filter-and-sort.component.css']
})
export class FilterAndSortComponent implements OnInit {

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.backendService.doGet(backendURL.subscription);
  }

}
