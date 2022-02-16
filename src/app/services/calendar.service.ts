import { Injectable } from '@angular/core';
import { EventApi } from '@fullcalendar/common';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Reminder } from '../interfaces/reminder';
import { ApplicationStore } from '../store/models/store.interfaces';
import * as reminder from '../store/actions/reminder.actions';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  reminders: Reminder[] = [];

  constructor(
    private readonly _store: Store<ApplicationStore>
  ) { }

  create(data: Reminder): Reminder {
    return data;
  }

  edit(data: Reminder): Reminder {
    // const eventApi: EventApi = this._store.
    return data;
  }

  list(date: Date): Observable<Reminder[]> {
    console.log(date);
    return of(this.reminders);
  }

  delete(reminderId: string): boolean {
    console.log(reminderId);
    return true;
  }

  setEventApi(event: EventApi): void {
    this._store.dispatch(new reminder.SetReminder())
  }
}
