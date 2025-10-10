import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Observabledemo3 } from './observabledemo3';

describe('Observabledemo3', () => {
  let component: Observabledemo3;
  let fixture: ComponentFixture<Observabledemo3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Observabledemo3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Observabledemo3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
