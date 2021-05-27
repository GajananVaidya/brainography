import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page30Component } from './page30.component';

describe('Page30Component', () => {
  let component: Page30Component;
  let fixture: ComponentFixture<Page30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page30Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
