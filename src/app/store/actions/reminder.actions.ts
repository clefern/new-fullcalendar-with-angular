import { Action } from '@ngrx/store';
import { Reminder } from 'src/app/interfaces/reminder';


export class SetReminder implements Action {
  readonly type = ReminderActionTypes.SET_REMINDER;
  constructor(public payload: Reminder) { }
}

export class UpdateReminder implements Action {
  readonly type = ReminderActionTypes.UPDATE_REMINDER;
  constructor(public payload: Reminder) { }
}

export class CleanReminder implements Action {
  readonly type = ReminderActionTypes.CLEAN_REMINDER;
}

export class UpdateListReminder implements Action {
  readonly type = ReminderActionTypes.LIST_REMINDER;
  constructor(public payload: Reminder[]) { }
}

export enum ReminderActionTypes {
  SET_REMINDER = '[Reminder] load',
  UPDATE_REMINDER = '[Reminder] Update',
  CLEAN_REMINDER = '[Reminder] Clean',
  LIST_REMINDER = '[Reminder] Update List',
}

export type ReminderActions = SetReminder | UpdateReminder | CleanReminder | UpdateListReminder;
