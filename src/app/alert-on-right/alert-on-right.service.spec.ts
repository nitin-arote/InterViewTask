import { TestBed } from '@angular/core/testing';

import { AlertOnRightService } from './alert-on-right.service';

describe('AlertOnRightService', () => {
  let service: AlertOnRightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertOnRightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
