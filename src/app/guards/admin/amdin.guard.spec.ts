import { TestBed } from '@angular/core/testing';

import { AmdinGuard } from './amdin.guard';

describe('AmdinGuard', () => {
  let guard: AmdinGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AmdinGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
