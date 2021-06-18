import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page45Component } from './page45.component';

describe('Page45Component', () => {
  let component: Page45Component;
  let fixture: ComponentFixture<Page45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page45Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
