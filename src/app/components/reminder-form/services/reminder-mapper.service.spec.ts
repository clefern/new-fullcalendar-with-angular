/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReminderMapperService } from './reminder-mapper.service';

describe('Service: ReminderMapper', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReminderMapperService]
    });
  });

  it('should ...', inject([ReminderMapperService], (service: ReminderMapperService) => {
    expect(service).toBeTruthy();
  }));
});
