import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { ApplicationStore, ReminderState } from '../models/store.interfaces';
import { reminderReducer } from './reminder.reducer';

export const reducers: ActionReducerMap<ApplicationStore> = {
  reminder: reminderReducer,
}

export const getReminderState = createFeatureSelector<ReminderState>('reminder')
export const 