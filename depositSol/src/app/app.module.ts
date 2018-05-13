import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { FilterAndSortComponent } from './components/comman/filter-and-sort/filter-and-sort.component';
import { TagComponent } from './components/comman/tag/tag.component';
import { CommentsComponent } from './components/comman/comments/comments.component';
import {TagService} from './components/comman/tag/tag.service';
import { MultiselectDropDownComponent } from './components/comman/multiselect-drop-down/multiselect-drop-down.component';
import { FilterPipe } from './pipe/filter.pipe';
import {FormsModule} from '@angular/forms';
import {WatchService} from './components/comman/watch-repo/watch.service';
import {ForkRepoService} from './components/comman/fork-repo/fork-repo.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavLinksComponent } from './components/header/nav-links/nav-links.component';


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
    ForkRepoComponent,
    FilterAndSortComponent,
    TagComponent,
    CommentsComponent,
    MultiselectDropDownComponent,
    FilterPipe,
    NavLinksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BackendService,
    CommonService,
    RepoDetailService,
    ContentService,
    StarRepoService,
    IssueCardService,
    TagService,
    WatchService,
    ForkRepoService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
