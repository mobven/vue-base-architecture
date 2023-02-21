import TodoService from "@/services/TodoService";
const todoService = new TodoService();
const actions = {
  getTodos({ commit }: { commit: any }) {
    todoService.getTodos().then((todos) => {
      commit("setTodos", todos);
    });
  },
};

export default actions;
