import { User } from "src/app/models/users.interface";

export interface AuthState {
  user: User;
}

export const initialAuthState: AuthState = {
  user: {
    email: '',
    password: '',
    token: '',
    id: '' 
  }
}