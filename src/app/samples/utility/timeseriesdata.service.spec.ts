import { TestBed } from '@angular/core/testing';

import { TimeseriesdataService } from './timeseriesdata.service';

describe('TimeseriesdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeseriesdataService = TestBed.get(TimeseriesdataService);
    expect(service).toBeTruthy();
  });
});
