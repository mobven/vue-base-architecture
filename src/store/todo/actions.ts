import type { ActionTree } from "vuex";
import type { State } from "./state";
import { MutationMethods } from "./mutations";
import TodoService from "@/services/TodoService";

export enum ActionMethods {
  fetchTodos = "fetchTodos",
}

export const actions: ActionTree<State, State> = {
  async [ActionMethods.fetchTodos]({ state, commit }) {
    const service = new TodoService();
    const result = await service.getTodos();
    commit(MutationMethods.setTodos, result);
  },
};
