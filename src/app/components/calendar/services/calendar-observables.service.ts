import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, merge, mergeMap, tap } from 'rxjs/operators';
import { Reminder } from 'src/app/interfaces/reminder';
import { ApplicationStore } from 'src/app/store/models/store.interfaces';
import { getReminderState } from 'src/app/store/reducers/app.reducer';
import { getReminderList } from 'src/app/store/reducers/reminder.reducer';

@Injectable({
  providedIn: 'root'
})
export class CalendarObservablesService {

  constructor(
    private readonly _store: Store<ApplicationStore>
  ) { }

  reminders$(): Observable<Reminder[]> {
    const reminder1: Reminder = { reminderId: 'event-id-111', text: 'E V E N T    1', date: '2022-02-11', time: '12:05:42', color: '#34fd56', city: 'São Paulo' };
    const reminder2: Reminder = { reminderId: 'event-id-222', text: 'E V E N T    2', date: '2022-02-12', time: '18:05:42', color: '#34fd56', city: 'São Paulo' };
    return of([
      reminder1,
      reminder2
    ]);
  }

  remindersState$(): Observable<Reminder[]> {
    return this._store.select(getReminderState).pipe(
      map(getReminderList)
    );
  }


}
