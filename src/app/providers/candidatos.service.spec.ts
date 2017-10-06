import { TestBed, inject } from '@angular/core/testing';

import { CandidatosService } from './candidatos.service';

describe('CandidatosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CandidatosService]
    });
  });

  it('should be created', inject([CandidatosService], (service: CandidatosService) => {
    expect(service).toBeTruthy();
  }));
});
