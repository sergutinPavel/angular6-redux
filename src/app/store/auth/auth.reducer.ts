import { Action } from '@ngrx/store';
import * as AuthActions from './auth.actions';


export interface State {
  user?: any;
  token?: string;
  userStatus: {
    loading: boolean;
    loaded: boolean;
    error: any;
  };
}

export const initialState: State = {
  user: null,
  token: null,
  userStatus: {
    loading: false,
    loaded: false,
    error: false
  }
};

export const authorizedState: State = {
  ...initialState,
  user: localStorage.getItem('user') ? initialState.user = JSON.parse(localStorage.getItem('user')) : null,
  token: localStorage.getItem('token') ? initialState.user = JSON.parse(localStorage.getItem('token')) : null,
};


export function reducer(state = authorizedState, action: AuthActions.Actions): State {
  switch (action.type) {

    case AuthActions.ActionTypes.SignInAction:
      return { ...state, userStatus: { loading: true, loaded: false, error: false } };
    case AuthActions.ActionTypes.SignInActionSuccess:
      return { ...state, token: action.payload.token, user: action.payload, userStatus: { loading: false, loaded: true, error: false } };
    case AuthActions.ActionTypes.SignInActionFail:
      return { ...state, user: action.payload, userStatus: { loading: false, loaded: false, error: action.payload } };
    case AuthActions.ActionTypes.LogoutAction:
      return { ...initialState };
    default:
      return state;
  }
}

export const getUser = (state: State) => state.user;
export const getUserStatus = (state: State) => state.userStatus;
export const getToken = (state: State) => state.token;
