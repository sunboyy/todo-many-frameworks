import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent {
  @Input()
  todos: Todo[];

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleCompleted: EventEmitter<Todo> = new EventEmitter();

  onToggleTodoCompleted(todo: Todo) {
    this.toggleCompleted.emit(todo);
  }

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }
}
