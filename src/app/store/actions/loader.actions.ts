import { Action } from '@ngrx/store';


export class StopLoader implements Action {
  readonly type = LoaderActionTypes.STOP_LOADER;
}

export class StartLoader implements Action {
  readonly type = LoaderActionTypes.START_LOADER;
}

export enum LoaderActionTypes {
  STOP_LOADER = '[Loader] stop',
  START_LOADER = '[Loader] start',
}

export type LoaderActions = StopLoader | StartLoader;
