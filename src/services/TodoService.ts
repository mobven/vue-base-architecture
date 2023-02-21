import axios from "@/utils/axios-util";
import { Todo } from "../models/Todo";

interface ITodoService {
  getTodos(): Promise<Todo[]>;
}

export default class TodoService implements ITodoService {
  public async getTodos(): Promise<Todo[]> {
    const response = await axios.get("/todos");
    const todos: Todo[] = response.data;
    return todos;
  }
}
