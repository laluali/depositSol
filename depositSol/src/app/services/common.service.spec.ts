import { TestBed, inject } from '@angular/core/testing';

import { CommonService } from './common.service';
import {AppService} from '../app.service';
import {REPO} from '../constants/global.constant';

describe('CommonService', () => {
  let service: CommonService = null;
  const testString = 'Test Data';
  const labelparam = '+label:"testLabel"';
  const sortParam = '+sort:"asc"';
  const assigneeParam = '+assignee:"testAssignee"';
  const milestoneParam = '+milestone:"1"';
  const testBase64String = window.btoa(testString);
  const searchString = 'repo:' + REPO + '+is:issue+is:open';
  const resultSearchString = searchString + (labelparam ? labelparam : '') + (sortParam ? sortParam : '') + (assigneeParam ? assigneeParam : '') + (milestoneParam ? milestoneParam : '');
  const milestone = [{'value' : 1}];
  const assigneeList = [{'login' : 'testAssignee'}];
  const labelList = [{'name' : 'testLabel'}];
  const sortList = [{'value' : 'asc'}];
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonService, AppService]
    });
  });

  beforeEach(inject([CommonService], (commonService: CommonService) => {
    service = commonService;
  }));

  it('should be created', inject([CommonService], (service: CommonService) => {
    expect(service).toBeTruthy();
    expect(service.getBase64).toBeDefined();
    expect(service.preventBodyScroll).toBeDefined();
    expect(service.getIssuesByAssignee).toBeDefined();
    expect(service.getIssuesByLabel).toBeDefined();
    expect(service.getIssuesBySortOrder).toBeDefined();
    expect(service.getIssuesByMilestone).toBeDefined();
    expect(service.getSearchString).toBeDefined();
  }));

  it('getBase64 should return base64 encoded string', function() {
    expect(service.getBase64(testString)).toEqual(testBase64String);
  });

  it('getSearchString should return search string', function() {
    expect(service.getSearchString(labelparam, sortParam, assigneeParam, milestoneParam)).toEqual(resultSearchString);
  });

  it('getIssueByMilestone should return Milestone', function() {
    expect(service.getIssuesByMilestone(milestone)).toEqual(milestoneParam);
  });

  it('getIssuesByAssignee should return Assignee', function() {
    expect(service.getIssuesByAssignee(assigneeList)).toEqual(assigneeParam);
  });

  it('getIssuesByLabel should return Label', function() {
    expect(service.getIssuesByLabel(labelList)).toEqual(labelparam);
  });

  it('getIssuesBySortOrder should return SortOrder', function() {
    expect(service.getIssuesBySortOrder(sortList)).toEqual(sortParam);
  });
});
