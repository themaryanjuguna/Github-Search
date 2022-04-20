import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GithubMainComponent } from './github-main.component';

describe('GithubMainComponent', () => {
  let component: GithubMainComponent;
  let fixture: ComponentFixture<GithubMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
