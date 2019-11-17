import { TestBed } from '@angular/core/testing';

import { CommonLibService } from './common-lib.service';

describe('CommonLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonLibService = TestBed.get(CommonLibService);
    expect(service).toBeTruthy();
  });
});
