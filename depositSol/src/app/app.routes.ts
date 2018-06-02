/*
* Created By Lalit Chaudhary
*/

import {Routes} from '@angular/router';
import {ContentComponent} from './components/content/content.component';
import {OpenIssueComponent} from './components/open-issue/open-issue.component';
import {FallBackComponent} from './components/fall-back/fall-back.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: ContentComponent,
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'openIssue',
    component: OpenIssueComponent
  },
  {
    path: 'openIssue/:issueId',
    component: OpenIssueComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: '**',
    component: FallBackComponent
  }
];
