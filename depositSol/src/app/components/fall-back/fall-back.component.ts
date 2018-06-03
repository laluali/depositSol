import { Component, OnInit } from '@angular/core';
import {dsImage} from '../../constants/global.constant';

@Component({
  selector: 'app-ds-fall-back',
  templateUrl: './fall-back.component.html',
  styleUrls: ['./fall-back.component.css']
})
export class FallBackComponent implements OnInit {

  constructor() { }

  catImg = dsImage.cat;
  ngOnInit() {
  }

}
