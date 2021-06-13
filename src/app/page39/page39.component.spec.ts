import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page39Component } from './page39.component';

describe('Page39Component', () => {
  let component: Page39Component;
  let fixture: ComponentFixture<Page39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page39Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
