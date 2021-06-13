import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page38Component } from './page38.component';

describe('Page38Component', () => {
  let component: Page38Component;
  let fixture: ComponentFixture<Page38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page38Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
