import { EventApi } from '@fullcalendar/common';

export interface ApplicationStore {
  reminder: ReminderState
}

export interface ReminderState {
  reminderApi: EventApi
}

