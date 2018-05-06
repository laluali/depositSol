import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ds-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor() { }

  @Input() commentURL: string;
  @Input()imageURL: string;
  @Input() comments: string

  ngOnInit() {
  }

}
