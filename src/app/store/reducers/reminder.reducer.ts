import { ReminderActions, ReminderActionTypes } from '../actions/reminder.actions';
import { ReminderState } from '../models/store.interfaces';

const reminderState: ReminderState = {
  reminderApi: null,
  list: []
}

export function reminderReducer(
  state: ReminderState = reminderState,
  action: ReminderActions
): ReminderState {
  switch (action.type) {
    case ReminderActionTypes.UPDATE_REMINDER:
      // const reminder: Reminder = eventApi.extendedProps as Reminder;
      return {
        ...state,
        reminderApi: null
      }
    case ReminderActionTypes.SET_REMINDER:
      return {
        ...state,
        reminderApi: null
      }
    case ReminderActionTypes.CLEAN_REMINDER:
      return {
        ...state,
        reminderApi: null
      }
    case ReminderActionTypes.LIST_REMINDER:
      return {
        ...state,
        list: action?.payload
      }
  }
}

export const getReminderApi = (state: ReminderState) => state?.reminderApi;
export const getReminderList = (state: ReminderState) => state?.list;
