import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page33Component } from './page33.component';

describe('Page33Component', () => {
  let component: Page33Component;
  let fixture: ComponentFixture<Page33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page33Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
