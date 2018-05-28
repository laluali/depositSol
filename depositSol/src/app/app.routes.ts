/*
* Created By Lalit Chaudhary
*/

import {Routes} from '@angular/router';
import {ContentComponent} from './components/content/content.component';
import {OpenIssueComponent} from './components/open-issue/open-issue.component';
import {FallBackComponent} from './components/fall-back/fall-back.component';
import {EditIssueComponent} from './components/edit-issue/edit-issue.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: ContentComponent
  },
  {
    path: 'openIssue',
    component: OpenIssueComponent
  },
  {
    path: 'editIssue',
    component: EditIssueComponent
  },
  {
    path: '**',
    component: FallBackComponent
  }
];
