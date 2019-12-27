import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  lastID = 0;
  todos: Todo[] = [];

  constructor(private apiService: ApiService) { }

  addTodo(todo: Todo): Observable<Todo> {
    return this.apiService.createTodo(todo);
  }

  deleteTodoByID(id: number): Observable<Todo> {
    return this.apiService.deleteTodoByID(id);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.apiService.updateTodo(todo);
  }

  getAllTodos(): Observable<Todo[]> {
    return this.apiService.getAllTodos();
  }

  getTodoByID(id: number): Observable<Todo> {
    return this.apiService.getTodoByID(id);
  }

  toggleTodoCompleted(todo: Todo): Observable<Todo> {
    todo.completed = !todo.completed;
    return this.updateTodo(todo);
  }
}
