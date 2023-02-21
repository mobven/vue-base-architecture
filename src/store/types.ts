import { Todo } from "../models/todo";
export interface ThemeState {
  theme: string;
}
export interface TodoState {
  todos: Todo[];
}

export interface RootState {
  theme: ThemeState;
  todo: TodoState;
}
