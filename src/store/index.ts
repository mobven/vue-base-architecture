import Vue from "vue";
import Vuex from "vuex";
import ThemeModule from "./theme";
import { RootState } from "./types";
Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  modules: {
    ThemeModule,
  },
});
