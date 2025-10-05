import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Httpdemo1 } from './httpdemo1';

describe('Httpdemo1', () => {
  let component: Httpdemo1;
  let fixture: ComponentFixture<Httpdemo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Httpdemo1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Httpdemo1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
