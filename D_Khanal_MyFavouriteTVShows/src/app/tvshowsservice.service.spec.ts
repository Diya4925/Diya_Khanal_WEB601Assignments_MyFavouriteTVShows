import { TestBed } from '@angular/core/testing';

import { TvshowsserviceService } from './tvshowsservice.service';

describe('TvshowsserviceService', () => {
  let service: TvshowsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvshowsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
