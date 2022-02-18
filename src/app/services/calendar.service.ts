import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Reminder } from '../interfaces/reminder';
import { ApplicationStore } from '../store/models/store.interfaces';
import * as reminder from '../store/actions/reminder.actions';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  reminders: Reminder[] = [];

  constructor(
    private readonly _store: Store<ApplicationStore>,
  ) { }

  create(data: Reminder): void {
    this.reminders.push(data);
    this._store.dispatch(new reminder.UpdateListReminder(this.reminders))
  }

  edit(newReminder: Reminder): void {
    let list: Reminder[] = this.reminders?.filter(item => item.reminderId != newReminder.reminderId);
    list.push(newReminder);
    this._store.dispatch(new reminder.UpdateListReminder(list))
  }

  setList(reminders: Reminder[]): void {
    this.reminders = reminders;
    this._store.dispatch(new reminder.UpdateListReminder(reminders));
  }

  delete(reminderId: string): void {
    let list: Reminder[] = this.reminders?.filter(item => item.reminderId != reminderId);
    this.reminders = list;
    this._store.dispatch(new reminder.UpdateListReminder(list))
  }
}
