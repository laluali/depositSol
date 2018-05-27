import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ds-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor() { }

  @Input() showLoader: boolean;

  ngOnInit() {
    this.showLoader = true;
  }

}
