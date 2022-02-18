import { EventApi } from '@fullcalendar/common';
import { Reminder } from 'src/app/interfaces/reminder';

export interface ApplicationStore {
  reminder: ReminderState,
  loader: LoaderState
}

export interface ReminderState {
  reminderApi: EventApi,
  list: Reminder[]
}

export interface LoaderState {
  isLoading: boolean;
}

