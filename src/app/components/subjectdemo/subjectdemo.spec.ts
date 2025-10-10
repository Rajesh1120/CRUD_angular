import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subjectdemo } from './subjectdemo';

describe('Subjectdemo', () => {
  let component: Subjectdemo;
  let fixture: ComponentFixture<Subjectdemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subjectdemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subjectdemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
