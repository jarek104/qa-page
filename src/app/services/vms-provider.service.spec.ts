import { TestBed, inject } from '@angular/core/testing';

import { VmsProviderService } from './vms-provider.service';

describe('VmsProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VmsProviderService]
    });
  });

  it('should be created', inject([VmsProviderService], (service: VmsProviderService) => {
    expect(service).toBeTruthy();
  }));
});
