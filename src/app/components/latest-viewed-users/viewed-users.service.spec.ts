import { TestBed } from '@angular/core/testing';

import { ViewedUsersService } from './viewed-users.service';

describe('ViewedUsersService', () => {
  let service: ViewedUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewedUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
