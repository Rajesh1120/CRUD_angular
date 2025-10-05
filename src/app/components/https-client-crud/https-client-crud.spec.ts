import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpsClientCRUD } from './https-client-crud';

describe('HttpsClientCRUD', () => {
  let component: HttpsClientCRUD;
  let fixture: ComponentFixture<HttpsClientCRUD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpsClientCRUD]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpsClientCRUD);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
