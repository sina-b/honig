import { TestBed } from '@angular/core/testing';

import { ImageUrlService } from './imageUrl.service';

describe('ImageUrlsService', () => {
  let service: ImageUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
