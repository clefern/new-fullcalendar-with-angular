import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { ApplicationStore, LoaderState, ReminderState } from '../models/store.interfaces';
import { getIsLoading, loaderReducer } from './loader.reducer';
import { getReminderApi, getReminderList, reminderReducer } from './reminder.reducer';

export const reducers: ActionReducerMap<ApplicationStore> = {
  reminder: reminderReducer,
  loader: loaderReducer
}

export const getReminderState = createFeatureSelector<ReminderState>('reminder');
export const getReminderApiSelector = createSelector(getReminderState, getReminderApi);
export const getReminderListSelector = createSelector(getReminderState, getReminderList);

export const getLoaderState = createFeatureSelector<LoaderState>('loader');
export const getLoaderSelector = createSelector(getLoaderState, getIsLoading)
