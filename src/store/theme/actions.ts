import type { ActionTree, ActionContext } from "vuex";
import type { State } from "./state";
import type { Mutations } from "./mutations";
import { MutationMethods } from "./mutations";

export type ActionCtx = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, "commit">;

export enum ActionMethods {
  changeTheme = "changeTheme",
}

export interface Actions {
  [ActionMethods.changeTheme](
    ctx: ActionCtx,
    theme: "light" | "dark"
  ): Promise<void>;
}

export const actions: ActionTree<State, State> = {
  async [ActionMethods.changeTheme](
    { commit, state },
    theme: "light" | "dark"
  ) {
    commit(MutationMethods.setTheme, theme);
  },
};
