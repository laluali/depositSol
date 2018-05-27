import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {TagService} from '../tag/tag.service';
import {IssueCardService} from '../issue-card/issue-card.service';
import {backendURL, dsImage, REPO} from '../../../constants/global.constant';
import {PersistenceService} from 'angular-persistence';

@Component({
  selector: 'app-ds-multiselect-drop-down',
  templateUrl: './multiselect-drop-down.component.html',
  styleUrls: ['./multiselect-drop-down.component.css']
})
export class MultiselectDropDownComponent implements OnInit {

  constructor(private _tagService: TagService,
              private _issueCardService: IssueCardService,
              private _persistenceService: PersistenceService) { }

  @Input() dropDownLabel: string;
  @Input() selectList: any = [];
  @Input() id: string;
  @Input() searchKey: string;
  @Input() showBorder: boolean;
  @Input() showColorBar: boolean;
  @Input() isImage: boolean;
  @Input() filterMultiple: boolean;
  defaultFilter = 'repo:' + REPO + '+is:open+is:issue';
  filteredList: any = [];
  showDropDown: boolean;
  searchText: any;
  selectionIndex: any;
  labelParam: string;
  sortParam: string;
  assigneeParam: string;
  milestonesParam: string;
  searchString: string;
  removeImg: string = dsImage.cross;


  ngOnInit() {
    this._tagService.selectTag.subscribe(
      selectedTag => {
        if (this.id == selectedTag.calledBy) {
          this.toggleTag(selectedTag);
        }
      }
    );
  }

  toggleTag(selectedTag) {
    if ((selectedTag.calledBy === 'sortId') && (this.filteredList.length > 0)) {
      this.removeSelection(this.filteredList[0]);
    }
    selectedTag.selectionIndex = this.selectList.indexOf(selectedTag);
    this.filteredList.push(selectedTag);
    this.selectList.splice(selectedTag.selectionIndex, 1);
    this.triggerIssue(selectedTag);
  }

  getIssuesByAssignee() {
    this.assigneeParam = '';
    if (this._persistenceService.get('assigneeFList')) {
      this._persistenceService.get('assigneeFList').forEach(
        assignee => {
          this.assigneeParam += '+assignee:"' + assignee.login + '"';
        }
      );
    }
    return this.assigneeParam;
  }

  getIssuesByLabel() {
    this.labelParam = '';
    if (this._persistenceService.get('labelFList')) {
      this._persistenceService.get('labelFList').forEach(
        label => {
          this.labelParam += '+label:"' + label.name + '"';
        }
      );
    }
    return this.labelParam;
  }

  getIssuesBySortOrder() {
    this.sortParam = '';
    if (this._persistenceService.get('sortList')) {
      this._persistenceService.get('sortList').forEach(
        item => {
          this.sortParam += '+sort:"' + item.value + '"';
        }
      );
    }
    return this.sortParam;
  }

  getStdFilter() {
    return '+is:open+is:issue';
  }

  triggerIssue(selectedTag) {
    if (this.filteredList.length > 0 || (this._persistenceService.get('sortList')
          || this._persistenceService.get('labelFList')
          || this._persistenceService.get('assigneeFList'))) {
      this.searchString = this.defaultFilter;
      this.filteredList.forEach(
        item => {
          switch (selectedTag.calledBy) {
            case 'labelId':
              this._persistenceService.set('labelFList', this.filteredList);
              break;
            case 'assigneeId':
              this._persistenceService.set('assigneeFList', this.filteredList);
              break;
            case 'sortId':
              this._persistenceService.set('sortList', this.filteredList);
              break;
          }
        }
      );
      this.searchString += this.getIssuesByLabel() + this.getIssuesBySortOrder() + this.getIssuesByAssignee();
    }
    this._issueCardService.getIssueEvent.emit(this.searchString);
  }

  removeSelection(item: any) {
    this.filteredList.splice(this.filteredList.indexOf(item), 1);
    this.selectList.splice(item.selectionIndex, 0, item);
    this.triggerIssue(item);
  }
}
