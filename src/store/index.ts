import { createStore } from "vuex";
import ThemeModule from "./theme";
import TodoModule from "./todo";

export default createStore({
  modules: {
    theme: ThemeModule,
    todo: TodoModule,
  },
});
