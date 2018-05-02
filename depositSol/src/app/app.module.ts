import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { IssueCardComponent } from './components/comman/issue-card/issue-card.component';
import { BackendService } from './services/backend.service';
import { HttpClientModule } from '@angular/common/http';
import { RepoDetailComponent } from './components/comman/repo-detail/repo-detail.component';
import { ErrorComponent } from './components/comman/error/error.component';
import { CommonService } from './services/common.service';
import { WatchRepoComponent } from './components/comman/watch-repo/watch-repo.component';
import { StarRepoComponent } from './components/comman/star-repo/star-repo.component';
import { ForkRepoComponent } from './components/comman/fork-repo/fork-repo.component';
import {RepoDetailService} from './components/comman/repo-detail/repo-detail.service';
import {ContentService} from './components/content/content.service';
import {StarRepoService} from './components/comman/star-repo/star-repo.service';
import {IssueCardService} from './components/comman/issue-card/issue-card.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    IssueCardComponent,
    RepoDetailComponent,
    ErrorComponent,
    WatchRepoComponent,
    StarRepoComponent,
    ForkRepoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    BackendService,
    CommonService,
    RepoDetailService,
    ContentService,
    StarRepoService,
    IssueCardService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
