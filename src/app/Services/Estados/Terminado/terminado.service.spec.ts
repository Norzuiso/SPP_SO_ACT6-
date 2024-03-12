import { TestBed } from '@angular/core/testing';

import { TerminadoService } from './terminado.service';

describe('TerminadoService', () => {
  let service: TerminadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerminadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
