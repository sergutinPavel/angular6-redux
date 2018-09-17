import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromGeneral from './general/general.reducer';
import * as fromAuth from './auth/auth.reducer';


export interface State {
  general: fromGeneral.State;
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<State> = {
  general: fromGeneral.reducer,
  auth: fromAuth.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

// GENERAL STATE SELECTOR
export const getGeneralState = (state): fromGeneral.State => {
  // console.warn('general state', state);
  return state.general;
};
// GENERAL FEATURE SELECTORS
export const selectExpandSidebar = createSelector(getGeneralState, fromGeneral.getExpandSidebar);

// AUTH STATE SELECTOR
export const getAuthState = (state): fromAuth.State => {
  // console.warn('general state', state);
  return state.auth;
};
// GENERAL FEATURE SELECTORS
export const selectUser = createSelector(getAuthState, fromAuth.getUser);
export const selectUserStatus = createSelector(getAuthState, fromAuth.getUserStatus);
export const selectToken = createSelector(getAuthState, fromAuth.getToken);
