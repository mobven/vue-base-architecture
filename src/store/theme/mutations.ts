import { ThemeState } from "../types";

const mutations = {
  setTheme(state: ThemeState, theme: string) {
    state.theme = theme;
  },
};

export default mutations;
