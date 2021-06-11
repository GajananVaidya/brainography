import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page44Component } from './page44.component';

describe('Page44Component', () => {
  let component: Page44Component;
  let fixture: ComponentFixture<Page44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page44Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
