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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    IssueCardComponent,
    RepoDetailComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    BackendService,
    CommonService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
