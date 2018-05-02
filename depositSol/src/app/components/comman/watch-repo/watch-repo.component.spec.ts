import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchRepoComponent } from './watch-repo.component';

describe('WatchRepoComponent', () => {
  let component: WatchRepoComponent;
  let fixture: ComponentFixture<WatchRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
