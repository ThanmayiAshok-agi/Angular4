import { TestBed } from '@angular/core/testing';

import { NeedDataService } from './need-data.service';

describe('NeedDataService', () => {
  let service: NeedDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeedDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
