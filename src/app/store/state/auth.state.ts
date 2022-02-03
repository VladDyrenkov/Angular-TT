import { IUser } from "../interface/users.interface";

export interface AuthState {
  user: IUser;
}

export const initialAuthState: AuthState = {
  user: {
    email: '',
    password: '',
    token: '',
    id: '' 
  }
}