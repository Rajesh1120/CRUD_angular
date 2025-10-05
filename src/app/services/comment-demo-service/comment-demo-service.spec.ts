import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentDemoService } from './comment-demo-service';

describe('CommentDemoService', () => {
  let component: CommentDemoService;
  let fixture: ComponentFixture<CommentDemoService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentDemoService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentDemoService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
