import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo2Observable } from './demo2-observable';

describe('Demo2Observable', () => {
  let component: Demo2Observable;
  let fixture: ComponentFixture<Demo2Observable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Demo2Observable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo2Observable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
