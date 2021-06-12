import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page48Component } from './page48.component';

describe('Page48Component', () => {
  let component: Page48Component;
  let fixture: ComponentFixture<Page48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page48Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
