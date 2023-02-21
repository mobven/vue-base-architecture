import { state } from "./state";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

const theme = {
  state,
  actions,
  mutations,
  getters,
  namespaced: true,
};

export default theme;
