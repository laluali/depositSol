import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRepoComponent } from './star-repo.component';

describe('StarRepoComponent', () => {
  let component: StarRepoComponent;
  let fixture: ComponentFixture<StarRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
