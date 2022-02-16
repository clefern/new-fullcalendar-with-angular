import { EventApi } from '@fullcalendar/common';
import { Action } from '@ngrx/store';
import { Reminder } from 'src/app/interfaces/reminder';
import { AppState } from 'src/app/interfaces/state.interface';
import { ReminderActions } from '../actions/reminder.actions';
import { ReminderState } from '../models/store.interfaces';

export function reminderReducer(state: ReminderState, action: Action): ReminderState {
  switch (action.type) {
    case ReminderActions.UPDATE_REMINDER:
      const eventApi: EventApi = action.data;
      const reminder: Reminder = eventApi.extendedProps as Reminder;
      eventApi.setStart(reminder.dateTime);
      eventApi.setProp('title', reminder.text);
      eventApi.setProp('city', reminder.city);
      eventApi.setProp('backgroundColor', reminder.color)
      return {
        ...state,
        reminderApi: eventApi
      }
    case ReminderActions.SET_REMINDER:
      return {
        ...state,
        reminderApi: null
      }
    case ReminderActions.CLEAN_REMINDER:
      return {
        ...state,
        reminderApi: null
      }
    default:
      return { ...state };
  }
}

export const getReminderApi = (state: ReminderState) => state.reminderApi;
