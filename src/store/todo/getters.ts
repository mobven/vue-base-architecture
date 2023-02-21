import { TodoState } from "../types";

const getters = {
  todos: (state: TodoState) => state.todos,
};

export default getters;
