import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {backendURL, dsImage} from '../../../constants/global.constant';
import {ForkRepoService} from './fork-repo.service';

@Component({
  selector: 'app-ds-fork-repo',
  templateUrl: './fork-repo.component.html',
  styleUrls: ['./fork-repo.component.css']
})
export class ForkRepoComponent implements OnInit {

  constructor(private _forkRepoService: ForkRepoService) { }
  @Input() forkCount: number;
  isDisabled: boolean;
  forkImg: string = dsImage.fork;

  ngOnInit() {
    this.isDisabled = true;
  }


}
