import { ApiService } from './api-service';

export class TodoDataService {
  lastID = 0;
  todos = [];

  static addTodo(todo) {
    return ApiService.createTodo(todo);
  }

  static deleteTodoByID(id) {
    return ApiService.deleteTodoByID(id);
  }

  static updateTodo(todo) {
    return ApiService.updateTodo(todo);
  }

  static getAllTodos() {
    return ApiService.getAllTodos();
  }

  static getTodoByID(id) {
    return ApiService.getTodoByID(id);
  }

  static toggleTodoCompleted(todo) {
    todo.completed = !todo.completed;
    return this.updateTodo(todo);
  }
}
