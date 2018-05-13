import { Component, OnInit } from '@angular/core';
import {dsImage} from '../../constants/global.constant';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-ds-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [trigger(
    'openClose',
    [
      state('collapsed, void', style({display: 'none'})),
      state('expanded', style({height: '*', width: '100%'})),
      transition(
        'collapsed => expanded', [
          animate('300ms ease-in', style({  opacity: 1}))
        ]
      ),
      transition(
        'expanded => collapsed', [
          animate('300ms ease-out', style({opacity: 0}))
        ]
      )
    ])
  ],
})

export class HeaderComponent implements OnInit {

  constructor() { }
  headerImg: string;
  searchIcon: string;
  stateExpression = 'collapsed';
  bar1 = 'bar1';
  bar3 = 'bar3';
  styleNavTabs = 'nav-tabs';
  ngOnInit() {
    this.headerImg = dsImage.header;
    this.searchIcon = dsImage.search;
    console.log(window.screen.width);
    setTimeout( () => {
      this.stateExpression = 'collapsed';
    }, 0);
  }
  toggleButton( toggleState: string) {
    this.stateExpression = (toggleState === 'collapsed') ? 'expanded' : 'collapsed';
    this.bar1 = (toggleState === 'collapsed') ? 'change bar1' : 'bar1';
    this.bar3 = (toggleState === 'collapsed') ? 'change bar1' : 'bar3';
  }

  search() {
    alert('Search Clicked');
  }

}
