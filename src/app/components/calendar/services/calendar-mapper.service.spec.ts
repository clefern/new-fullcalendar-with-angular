/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CalendarMapperService } from './calendar-mapper.service';

describe('Service: CalendarMapper', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendarMapperService]
    });
  });

  it('should ...', inject([CalendarMapperService], (service: CalendarMapperService) => {
    expect(service).toBeTruthy();
  }));
});
