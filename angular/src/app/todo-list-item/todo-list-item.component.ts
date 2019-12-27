import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html'
})
export class TodoListItemComponent {
  @Input()
  todo: Todo;

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleCompleted: EventEmitter<Todo> = new EventEmitter();

  toggleTodoCompleted(todo: Todo) {
    this.toggleCompleted.emit(todo);
  }

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }
}
