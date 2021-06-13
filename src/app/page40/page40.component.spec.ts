import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page40Component } from './page40.component';

describe('Page40Component', () => {
  let component: Page40Component;
  let fixture: ComponentFixture<Page40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page40Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
