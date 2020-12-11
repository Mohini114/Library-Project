import { TestBed } from '@angular/core/testing';

import { AuthorisedSideNavServiceService } from './authorised-side-nav-service.service';

describe('AuthorisedSideNavServiceService', () => {
  let service: AuthorisedSideNavServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorisedSideNavServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
