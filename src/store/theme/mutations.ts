import type { MutationTree } from "vuex";
import type { State } from "./state";

export enum MutationMethods {
  setTheme = "setTheme",
}

export interface Mutations<S = State> {
  [MutationMethods.setTheme](state: S, theme: "light" | "dark"): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationMethods.setTheme](state, result) {
    state.theme = result;
  },
};
