import { TestBed } from '@angular/core/testing';

import { JsonReaderService } from './json-reader.service';

describe('JsonReaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonReaderService = TestBed.get(JsonReaderService);
    expect(service).toBeTruthy();
  });
});
