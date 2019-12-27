import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../todo-data.service';
import { Todo } from '../todo';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(
    private todoDataService: TodoDataService,
    private route: ActivatedRoute,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => (this.todos = data.todos));
  }

  onAddTodo(todo) {
    this.todoDataService.addTodo(todo).subscribe(newTodo => {
      this.todos = this.todos.concat(newTodo);
    });
  }

  onToggleTodoCompleted(todo: Todo) {
    this.todoDataService.toggleTodoCompleted(todo).subscribe(updatedTodo => (todo = updatedTodo));
  }

  onRemoveTodo(todo: Todo) {
    this.todoDataService.deleteTodoByID(todo.id).subscribe(_ => {
      this.todos = this.todos.filter(t => t.id !== todo.id);
    });
  }

  doSignOut() {
    this.auth.doSignOut();
    this.router.navigate(['/sign-in']);
  }
}
