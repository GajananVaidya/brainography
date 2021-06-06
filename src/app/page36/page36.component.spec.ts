import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page36Component } from './page36.component';

describe('Page36Component', () => {
  let component: Page36Component;
  let fixture: ComponentFixture<Page36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page36Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
