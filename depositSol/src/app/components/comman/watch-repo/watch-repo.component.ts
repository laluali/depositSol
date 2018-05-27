import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {backendURL, dsImage} from '../../../constants/global.constant';
import {WatchService} from './watch.service';

@Component({
  selector: 'app-ds-watch-repo',
  templateUrl: './watch-repo.component.html',
  styleUrls: ['./watch-repo.component.css']
})
export class WatchRepoComponent implements OnInit, OnChanges {

  constructor(private _watchService: WatchService) { }

  @Input() watchCount: number;
  isWatch: boolean;
  isDisabled: boolean;
  watchImg: string = dsImage.watch;

  ngOnInit() {
    this.isDisabled = false;
    this._watchService.isWatch$(backendURL.subscription).subscribe(
      success => {this.isWatch = success; },
      error => {console.log('isStarError: ', error); }// need to handle
    );
  }
  ngOnChanges() {

  }

  toggleStar(isWatch: boolean) {
    this.isDisabled = true;
    if (this.isWatch) {
      this.removeStar();
    } else {
      this.addStar();
    }
  }

  addStar() {
    this._watchService.putWatch$(backendURL.subscription, { 'subscription': true}).subscribe(
      success => {
        this.isWatch = true;
        this.watchCount++;
        this.isDisabled = false;
      },
      error => {
        this.isDisabled = false;
      }
    );
  }

  removeStar() {
    this.isDisabled = true;
    this._watchService.removeWatch$(backendURL.subscription).subscribe(
      success => {
        this.isWatch = false;
        this.watchCount--;
        this.isDisabled = false;
      },
      error => {
        this.isDisabled = false;
      }
    );
  }

}
