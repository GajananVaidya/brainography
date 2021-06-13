import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page37Component } from './page37.component';

describe('Page37Component', () => {
  let component: Page37Component;
  let fixture: ComponentFixture<Page37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page37Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
