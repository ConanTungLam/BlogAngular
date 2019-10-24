import { TestBed } from '@angular/core/testing';

import { UserRegisteredService } from './user-registered.service';

describe('UserRegisteredService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserRegisteredService = TestBed.get(UserRegisteredService);
    expect(service).toBeTruthy();
  });
});
