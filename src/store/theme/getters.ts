import type { GetterTree } from "vuex";
import type { State } from "./state";

export enum GetterMethods {
  getTheme = "getTheme",
}

export type Getters = {
  [GetterMethods.getTheme](state: State): () => string;
};

export const getters: GetterTree<State, State> & Getters = {
  [GetterMethods.getTheme]: (state) => () => state.theme,
};
