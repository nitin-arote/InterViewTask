import { TestBed } from '@angular/core/testing';

import { SchoolResourceService } from './school-resource.service';

describe('SchoolResourceService', () => {
  let service: SchoolResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
