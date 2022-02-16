import { Action } from '@ngrx/store';


export class SetReminder implements Action {
  readonly type = ReminderActions.SET_REMINDER;
}

export class UpdateReminder implements Action {
  readonly type = ReminderActions.UPDATE_REMINDER;
}

export class CleanReminder implements Action {
  readonly type = ReminderActions.CLEAN_REMINDER;
}

export enum ReminderActions {
  SET_REMINDER = 'Set Reminder',
  UPDATE_REMINDER = 'Update Reminder',
  CLEAN_REMINDER = 'Clean Reminder'
}
