import { TestBed, inject } from '@angular/core/testing';

import { LifeformService } from './lifeform.service';

describe('LifeformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LifeformService]
    });
  });

  it('should ...', inject([LifeformService], (service: LifeformService) => {
    expect(service).toBeTruthy();
  }));
});
