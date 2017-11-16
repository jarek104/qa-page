import { TestBed, inject } from '@angular/core/testing';

import { VmsService } from './vms-service.service';

describe('VmsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VmsService]
    });
  });

  it('should be created', inject([VmsService ], (service: VmsService) => {
    expect(service).toBeTruthy();
  }));
});
