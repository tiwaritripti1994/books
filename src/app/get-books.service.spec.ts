import { TestBed } from '@angular/core/testing';

import { GetBooksService } from './get-books.service';

describe('GetBooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetBooksService = TestBed.get(GetBooksService);
    expect(service).toBeTruthy();
  });
});
