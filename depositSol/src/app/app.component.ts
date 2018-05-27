import { Component } from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-ds-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Desposit Solutions';
  scrollBody: string;
  constructor(private _appService: AppService) {
    this._appService.scrollBody.subscribe(
      result => {
        result ? (this.scrollBody = 'modal-open') : (this.scrollBody = '');
      }
    );
  }
}
