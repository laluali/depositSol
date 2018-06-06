import {ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';
import {AppService} from '../app.service';
import {REPO} from '../constants/global.constant';

@Injectable()
export class CommonService {

  constructor(private _appService: AppService) { }

  getBase64(rawString: string) {
    return window.btoa(rawString);
  }

  preventBodyScroll(state: boolean) {
    this._appService.scrollBody.emit(state);
  }

  getIssuesByAssignee(assigneeList: any[]) {
    let assigneeParam = '';
    if (assigneeList !== undefined || assigneeList !== null) {
      assigneeList.forEach(
        assignee => {
          assigneeParam += '+assignee:"' + assignee.login + '"';
        }
      );
    }
    return assigneeParam;
  }

  getIssuesByLabel(labelList: any[]) {
    let labelParam = '';
    if (labelList !== undefined || labelList !== null) {
      labelList.forEach(
        label => {
          labelParam += '+label:"' + label.name + '"';
        }
      );
    }
    return labelParam;
  }

  getIssuesBySortOrder(sortList: any[]) {
    let sortParam = '';
    if (sortList !== undefined || sortList !== null) {
      sortList.forEach(
        item => {
          sortParam += '+sort:"' + item.value + '"';
        }
      );
    }
    return sortParam;
  }

  getIssuesByMilestone(milestone: any[]) {
    let milestoneParam = '';
    if (milestone !== undefined || milestone !== null) {
      milestone.forEach(
        item => {
          milestoneParam += '+milestone:"' + item.title + '"';
        }
      );
    }
    return milestoneParam;
  }

  getSearchString( labelparam?, sortParam?, assigneeParam?, milestoneParam?) {
    let searchString = 'repo:' + REPO + '+is:issue+is:open';
    return searchString += (labelparam ? labelparam : '') + (sortParam ? sortParam : '') + (assigneeParam ? assigneeParam : '') + (milestoneParam ? milestoneParam : '');
  }
}
