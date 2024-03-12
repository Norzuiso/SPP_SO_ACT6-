import { TestBed } from '@angular/core/testing';

import { BloqueadoService } from './bloqueado.service';

describe('BloqueadoService', () => {
  let service: BloqueadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloqueadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
