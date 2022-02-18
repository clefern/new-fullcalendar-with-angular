/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CalendarObservablesService } from './calendar-observables.service';

describe('Service: CalendarObservables', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendarObservablesService]
    });
  });

  it('should ...', inject([CalendarObservablesService], (service: CalendarObservablesService) => {
    expect(service).toBeTruthy();
  }));
});
