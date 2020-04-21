import { TestBed } from '@angular/core/testing';

import { SolarfarmService } from './solarfarm.service';

describe('SolarfarmService', () => {
  let service: SolarfarmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolarfarmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
