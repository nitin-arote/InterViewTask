import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertOnRightComponent } from './alert-on-right.component';

describe('AlertOnRightComponent', () => {
  let component: AlertOnRightComponent;
  let fixture: ComponentFixture<AlertOnRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertOnRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertOnRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
