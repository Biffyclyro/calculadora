import { TestBed } from '@angular/core/testing';

import { GatosService } from './gatos.service';

describe('GatosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GatosService = TestBed.get(GatosService);
    expect(service).toBeTruthy();
  });
});
