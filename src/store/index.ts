import Vue from "vue";
import Vuex from "vuex";
import ThemeModule from "./theme";
import TodoModule from "./todo";
import { RootState } from "./types";
Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  modules: {
    ThemeModule,
    TodoModule,
  },
});
