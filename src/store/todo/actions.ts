import type { ActionTree, ActionContext } from "vuex";
import type { State } from "./state";
import type { Mutations } from "./mutations";
import { MutationMethods } from "./mutations";
import TodoService from "@/services/TodoService";

export type ActionCtx = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, "commit">;

export enum ActionMethods {
  fetchTodos = "fetchTodos",
}

export interface Actions {
  [ActionMethods.fetchTodos](ctx: ActionCtx): Promise<void>;
}

export const actions: ActionTree<State, State> & Actions = {
  async [ActionMethods.fetchTodos]({ state, commit }) {
    const service = new TodoService();
    const result = await service.getTodos();
    commit(MutationMethods.setTodos, result);
  },
};
