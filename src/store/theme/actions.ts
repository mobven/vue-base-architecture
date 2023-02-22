import type { ActionTree, ActionContext } from "vuex";
import type { State } from "./state";
import { MutationMethods } from "./mutations";

export enum ActionMethods {
  changeTheme = "changeTheme",
}

export const actions: ActionTree<State, State> = {
  async [ActionMethods.changeTheme](
    { commit, state },
    theme: "light" | "dark"
  ) {
    commit(MutationMethods.setTheme, theme);
  },
};
