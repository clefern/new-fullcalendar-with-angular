import { LoaderActions, LoaderActionTypes } from '../actions/loader.actions';
import { LoaderState } from '../models/store.interfaces';

const loaderState: LoaderState = {
  isLoading: false,
}

export function loaderReducer(
  state: LoaderState = loaderState,
  action: LoaderActions
): LoaderState {
  switch (action.type) {
    case LoaderActionTypes.STOP_LOADER:
      return {
        ...state,
        isLoading: false
      }
    case LoaderActionTypes.START_LOADER:
      return {
        ...state,
        isLoading: true
      }
  }
}

export const getIsLoading = (state: LoaderState) => state.isLoading;
