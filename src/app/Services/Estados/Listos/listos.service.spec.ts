import { TestBed } from '@angular/core/testing';

import { ListosService } from './listos.service';

describe('ListosService', () => {
  let service: ListosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
