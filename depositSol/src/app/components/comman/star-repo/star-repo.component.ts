import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {StarRepoService} from './star-repo.service';
import {backendURL} from '../../../constants/global.constant';

@Component({
  selector: 'app-ds-star-repo',
  templateUrl: './star-repo.component.html',
  styleUrls: ['./star-repo.component.css']
})
export class StarRepoComponent implements OnInit, OnChanges {

  constructor(private _starRepoService: StarRepoService) { }

  @Input() starCount: number;
  @Input() organization: any;
  @Input() repoName: string;
  @Input() repoHTMLURL: string;
  isStar: boolean;
  isDisabled: boolean;
  starIconClass: string;

  ngOnInit() {
    this.isDisabled = false;
    this._starRepoService.isStar$(backendURL.star).subscribe(
      success => {this.isStar = success; },
      error => {console.log('isStarError: ', error); }// need to handle
    );
  }
  ngOnChanges() {
    console.log('fromChanges', this.starCount);
  }

  toggleStar(isStar: boolean) {
    this.isDisabled = true;
    if (this.isStar) {
      this.removeStar();
    } else {
      this.addStar();
    }
  }

  addStar() {
    this._starRepoService.putStar$(backendURL.star).subscribe(
      success => {
        this.isStar = true;
        this.starCount++;
        this.isDisabled = false;
        },
      error => {
        this.isDisabled = false;
      }
    );
  }

  removeStar() {
    this.isDisabled = true;
    this._starRepoService.removeStar$(backendURL.star).subscribe(
      success => {
        this.isStar = false;
        this.starCount--;
        this.isDisabled = false;
      },
      error => {
        this.isDisabled = false;
      }
    );
  }
}
