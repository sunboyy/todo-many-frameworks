import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';
import { ApiMockService } from './api-mock.service';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ApiService,
          useClass: ApiMockService
        }
      ]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
