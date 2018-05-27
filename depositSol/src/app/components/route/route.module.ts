import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OpenIssueComponent} from './open-issue/open-issue.component';
import {EditIssueComponent} from './edit-issue/edit-issue.component';
import {FallBackComponent} from './fall-back/fall-back.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    OpenIssueComponent,
    EditIssueComponent,
    FallBackComponent
  ]
})
export class RouteComponentsModule { }
