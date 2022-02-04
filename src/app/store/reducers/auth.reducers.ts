import { logInAction, logOutAction, userSaveAction } from "../actions/auth.actions";
import { Action, ActionReducer, createReducer, createSelector, on } from '@ngrx/store';
import { AuthState, initialAuthState } from "../state/auth.state";

export const authReducer: ActionReducer<AuthState, Action> = createReducer(
  initialAuthState,
  on(logInAction, (state, { email, password }) => {    
    return {...state, user: {email: email,
      password: password,
      token: ''}}
  }),
  on(userSaveAction, (state, { user }) => {
    console.log(user);
    
    return {...state, user}
  }),
  on (logOutAction,(state) => {
    return {
      ...state, 
      user: {
        email: '',
        password: '',
        token: '',
        id: '',
      }
    }
  })
  );
 
  

