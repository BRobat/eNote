import { TestBed, inject } from '@angular/core/testing';

import { NoteSourceService } from './note-source.service';

describe('NoteSourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteSourceService]
    });
  });

  it('should be created', inject([NoteSourceService], (service: NoteSourceService) => {
    expect(service).toBeTruthy();
  }));
});
