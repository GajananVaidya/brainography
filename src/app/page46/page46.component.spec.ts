import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page46Component } from './page46.component';

describe('Page46Component', () => {
  let component: Page46Component;
  let fixture: ComponentFixture<Page46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page46Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
