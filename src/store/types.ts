export interface ThemeState {
  theme: string;
}

export interface LoginState {
  token: string;
}

export interface RootState {
  theme: ThemeState;
  login: LoginState;
}
