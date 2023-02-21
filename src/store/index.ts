import { createStore } from "vuex";
import ThemeModule from "./theme";
import TodoModule from "./todo";
import { RootState } from "./types";

export default createStore<RootState>({
  modules: {
    theme: ThemeModule,
    todo: TodoModule,
  },
});
