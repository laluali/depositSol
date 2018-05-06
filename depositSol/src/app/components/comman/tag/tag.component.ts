import {Component, Input, OnInit} from '@angular/core';
import {TagService} from './tag.service';

@Component({
  selector: 'app-ds-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  constructor(private _tagService: TagService) {
  }

  @Input() isLink: boolean;
  @Input() tag: any;
  @Input() checkBox: boolean;
  tagURL: string;
  tagColor: string;
  tagName: string;
  isChecked: boolean;

  ngOnInit() {
    this.tagColor = this.tag.color;
    this.tagName = this.tag.name;
    this.tagURL = this.tag.url;
  }

  addRemoveTag(tag: any, event: any) {
    if (event.target.checked) {
      this.tag.isChecked = true;
      this._tagService.selectTag.emit(tag);
    } else {
      this.tag.isChecked = false;
      this._tagService.unSelectTag.emit(tag);
    }
  }
}
