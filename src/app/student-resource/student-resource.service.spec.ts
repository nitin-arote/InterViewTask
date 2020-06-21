import { TestBed } from '@angular/core/testing';

import { StudentResourceService } from './student-resource.service';

describe('StudentResourceService', () => {
  let service: StudentResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
