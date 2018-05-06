import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {TagService} from '../tag/tag.service';
import {IssueCardService} from '../issue-card/issue-card.service';
import {backendURL, dsImage} from '../../../constants/global.constant';

@Component({
  selector: 'app-ds-multiselect-drop-down',
  templateUrl: './multiselect-drop-down.component.html',
  styleUrls: ['./multiselect-drop-down.component.css']
})
export class MultiselectDropDownComponent implements OnInit {

  constructor(private _tagService: TagService, private _issueCardService: IssueCardService) { }

  @Input() dropDownLabel: string;
  @Input() selectList: any = [];
  defaultFilter = 'repo:angular/angular.js+type:issue+state:open';
  filteredList: any = [];
  showDropDown: boolean;
  searchText: string;
  selectionIndex: any;
  searchString: string;
  removeImg: string = dsImage.cross;
  ngOnInit() {
    this._tagService.selectTag.subscribe(
      selectedTag => {
        selectedTag.selectionIndex = this.selectList.indexOf(selectedTag);
        this.filteredList.push(selectedTag);
        this.selectList.splice(selectedTag.selectionIndex, 1);
        this.triggerIssue();
      }
    );
  }

  triggerIssue() {
    let params: string;
    if (this.filteredList.length > 0) {
      this.filteredList.forEach(
        item => {
          params ? params += this.defaultFilter + '+label:' + '"' + item.name.toString() + '"' : params = this.defaultFilter + '+label:' + '"' + item.name.toString() + '"';
        }
      );
    } else {
      params = this.defaultFilter;
    }
    this._issueCardService.getIssueEvent.emit(params);
  }

  removeSelection(item: any) {
    this.filteredList.splice(this.filteredList.indexOf(item), 1);
    this.selectList.splice(item.selectionIndex, 0, item);
    this.triggerIssue();
  }

}
