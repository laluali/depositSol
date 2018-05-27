import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {CommonService} from '../../../services/common.service';
import {BackendService} from '../../../services/backend.service';
import {backendURL} from '../../../constants/global.constant';

@Component({
  selector: 'app-ds-filter-and-sort',
  templateUrl: './filter-and-sort.component.html',
  styleUrls: ['./filter-and-sort.component.css'],
  animations: [trigger(
    'openClose',
    [
      state('collapsed, void', style({display: 'none'})),
      state('expanded', style({height: '400px', width: '100%'})),
      transition(
        'collapsed <=> expanded', [animate(500, style({height: '400px'})), animate(500)]
      )
    ])],
})
export class FilterAndSortComponent implements OnInit {

  constructor(private backendService: BackendService) { }

  stateExpression: string;

  ngOnInit() {
    this.backendService.doGet(backendURL.subscription);
  }

  expand() { this.stateExpression = 'expanded'; }
  collapse() { this.stateExpression = 'collapsed'; }



}
