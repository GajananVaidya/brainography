import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page47Component } from './page47.component';

describe('Page47Component', () => {
  let component: Page47Component;
  let fixture: ComponentFixture<Page47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page47Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
