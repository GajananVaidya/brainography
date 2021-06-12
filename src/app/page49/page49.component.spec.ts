import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page49Component } from './page49.component';

describe('Page49Component', () => {
  let component: Page49Component;
  let fixture: ComponentFixture<Page49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page49Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
