import { TodoState } from "../types";
const mutations = {
  setTodos(state: TodoState, todos: any) {
    state.todos = todos;
  },
};
export default mutations;
