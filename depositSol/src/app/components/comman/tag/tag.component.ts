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
  @Input() showBorder: boolean;
  @Input() showColorBar: boolean;
  @Input() isImage: boolean;
  @Input() calledBy: string;
  tagURL: string;
  tagColor: string;
  tagName: string;
  isChecked: boolean;
  imageURL: string;

  ngOnInit() {
    this.tagColor = this.tag.color;
    this.tagName = this.tag.name ? this.tag.name : this.tag.login;
    this.tagURL = this.tag.url;
    if (this.isImage) {
      this.imageURL = this.tag.avatar_url;
    }
  }

  addRemoveTag(tag: any, event: any) {
    if (event.target.checked) {
      this.tag.isChecked = true;
      this.tag.calledBy = this.calledBy;
      this._tagService.selectTag.emit(tag);
    } else {
      this.tag.isChecked = false;
      this.tag.calledBy = this.calledBy;
      this._tagService.unSelectTag.emit(tag);
    }
  }
}
