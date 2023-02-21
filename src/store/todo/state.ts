import { Todo } from "@/models/todo";
export const state = {
  todos: [] as Todo[],
};
export type State = typeof state;
