import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromGeneral from './general/general.reducer';


export interface State {
  general: fromGeneral.State;
}

export const reducers: ActionReducerMap<State> = {
  general: fromGeneral.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

// GENERAL STATE SELECTOR
export const getGeneralState = (state): fromGeneral.State => {
  // console.warn('general state', state);
  return state.general;
};
// GENERAL FEATURE SELECTORS
export const selectExpandSidebar = createSelector(getGeneralState, fromGeneral.getExpandSidebar);
