import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponents } from './demo-components';

describe('DemoComponents', () => {
  let component: DemoComponents;
  let fixture: ComponentFixture<DemoComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
