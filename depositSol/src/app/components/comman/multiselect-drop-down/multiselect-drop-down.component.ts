import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {TagService} from '../tag/tag.service';
import {IssueCardService} from '../issue-card/issue-card.service';
import {backendURL, dsImage, REPO} from '../../../constants/global.constant';
import {CommonService} from '../../../services/common.service';
import {OpenIssueService} from '../../open-issue/open-issue.service';

@Component({
  selector: 'app-ds-multiselect-drop-down',
  templateUrl: './multiselect-drop-down.component.html',
  styleUrls: ['./multiselect-drop-down.component.css']
})
export class MultiselectDropDownComponent implements OnInit, OnDestroy {

  constructor(private _tagService: TagService,
              private _issueCardService: IssueCardService,
              private _commonService: CommonService,
              private _openIssueService: OpenIssueService) { }

  @Input() dropDownLabel: string;
  @Input() selectList: any = [];
  @Input() id: string;
  @Input() searchKey: string;
  @Input() showBorder: boolean;
  @Input() showColorBar: boolean;
  @Input() isImage: boolean;
  @Input() filterMultiple: boolean;
  @Input() refreshResults: boolean;
  @Output() getFilteredList: EventEmitter<any[]> = new EventEmitter<any[]>(true);
  defaultFilter = 'repo:' + REPO + '+is:open+is:issue';
  @Input() filteredList: any = [];
  showDropDown: boolean;
  searchText: any;
  selectionIndex: any;
  searchString: string;
  removeImg: string = dsImage.cross;
  private routeSub: any;
  private selectTag: any;
  ngOnInit() {
    this.selectTag = this._tagService.selectTag.subscribe(
      selectedTag => {
        if (this.id === selectedTag.calledBy) {
          this.toggleTag(selectedTag);
        }
      }
    );

    this._openIssueService.prefillFilteredList.subscribe(
      next => {
        this.filteredList = next;
        },
      error => {}
    );
  }

  ngOnDestroy () {
    this.selectTag.unsubscribe();
  }

  toggleTag(selectedTag) {
    if (((selectedTag.calledBy === 'sortId') || (selectedTag.calledBy === 'milestoneId')) && (this.filteredList.length > 0)) {
      this.removeSelection(this.filteredList[0]);
    }
    selectedTag.selectionIndex = this.selectList.indexOf(selectedTag);
    this.filteredList.push(selectedTag);
    this.selectList.splice(selectedTag.selectionIndex, 1);
    this.getFilteredList.emit(this.filteredList);
  }

  removeSelection(item: any) {
    this.filteredList.splice(this.filteredList.indexOf(item), 1);
    this.selectList.splice(item.selectionIndex, 0, item);
    this.getFilteredList.emit(this.filteredList);
  }
}
