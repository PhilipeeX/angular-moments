import { TestBed } from '@angular/core/testing';

import { AnimalRemotionService } from './animal-remotion.service';

describe('AnimalRemotionService', () => {
  let service: AnimalRemotionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalRemotionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
