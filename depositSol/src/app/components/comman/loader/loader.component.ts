import {Component, Input, OnInit} from '@angular/core';
import {LoaderService} from './loader.service';

@Component({
  selector: 'app-ds-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor(private _loaderService: LoaderService) { }

  showLoader: boolean;

  ngOnInit() {
    this.showLoader = false;
    this._loaderService.showLoader.subscribe(
      loaderState => this.showLoader = loaderState
    );
  }

}
