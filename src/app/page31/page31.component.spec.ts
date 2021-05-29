import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page31Component } from './page31.component';

describe('Page31Component', () => {
  let component: Page31Component;
  let fixture: ComponentFixture<Page31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page31Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
