import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ImagesService } from './images.service';

describe('ImagesService', () => {
  let service: ImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return data', (done: DoneFn) => {
    service.getImages(1000).then(value => {
      expect(value.length == 1000).toBeTruthy();
      done();
    });
  });

  it('should return random text', () => {
    expect(typeof service.randomText).toBe('string');
  });

});
