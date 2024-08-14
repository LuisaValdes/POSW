import { TestBed } from '@angular/core/testing';

import { ConsumoAppiService } from './consumo-appi.service';

describe('ConsumoAppiService', () => {
  let service: ConsumoAppiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumoAppiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
