import { IUser } from "../interface/users.interface";
import { logInAction, logOutAction, userSaveAction } from "../actions/auth.actions";
import { Action, ActionReducer, createReducer, createSelector, on } from '@ngrx/store';
import { AuthState, initialAuthState } from "../state/auth.state";

export const authReducer: ActionReducer<AuthState, Action> = createReducer(
  initialAuthState,
  on(logInAction, (state, { email, password }) => {    
    return {user: {email, password}}
  }),
  on(userSaveAction, (state, { user }) => {
    console.log(user);
    
    return {...state, user: user}
  }),
  on (logOutAction,(state) => {
    return {...state, user: {
      email: '',
      password: '',
      token: '',
      id: '',
    }}
  })
  );
 
  

