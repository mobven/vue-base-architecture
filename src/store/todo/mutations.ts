import { Todo } from "@/models/todo";
import type { MutationTree } from "vuex";
import type { State } from "./state";

export enum MutationMethods {
  setTodos = "setTodos",
}

export interface Mutations<S = State> {
  [MutationMethods.setTodos](state: S, todos: Todo[]): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationMethods.setTodos](state, result) {
    state.todos = result;
  },
};
