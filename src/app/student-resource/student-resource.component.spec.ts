import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentResourceComponent } from './student-resource.component';

describe('StudentResourceComponent', () => {
  let component: StudentResourceComponent;
  let fixture: ComponentFixture<StudentResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
