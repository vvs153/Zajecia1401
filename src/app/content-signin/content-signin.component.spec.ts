import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSigninComponent } from './content-signin.component';

describe('ContentSigninComponent', () => {
  let component: ContentSigninComponent;
  let fixture: ComponentFixture<ContentSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSigninComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
