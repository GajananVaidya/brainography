import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page35Component } from './page35.component';

describe('Page35Component', () => {
  let component: Page35Component;
  let fixture: ComponentFixture<Page35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page35Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
