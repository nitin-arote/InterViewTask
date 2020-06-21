import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolResourceComponent } from './school-resource.component';

describe('SchoolResourceComponent', () => {
  let component: SchoolResourceComponent;
  let fixture: ComponentFixture<SchoolResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
