import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page34Component } from './page34.component';

describe('Page34Component', () => {
  let component: Page34Component;
  let fixture: ComponentFixture<Page34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page34Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
