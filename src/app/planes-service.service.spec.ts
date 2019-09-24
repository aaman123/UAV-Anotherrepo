import { TestBed } from '@angular/core/testing';

import { PlanesServiceService } from './planes-service.service';

describe('PlanesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanesServiceService = TestBed.get(PlanesServiceService);
    expect(service).toBeTruthy();
  });
});
