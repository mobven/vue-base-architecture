import { Todo } from "@/models/todo";
import type { GetterTree } from "vuex";
import type { State } from "./state";

export enum GetterMethods {
  getTodos = "getTodos",
}

export type Getters = {
  [GetterMethods.getTodos](state: State): () => Todo[];
};

export const getters: GetterTree<State, State> & Getters = {
  [GetterMethods.getTodos]: (state) => () => {
    return state.todos;
  },
};
