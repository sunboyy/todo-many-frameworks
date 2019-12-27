import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { Todo } from '../todo';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoListComponent,
        TodoListItemComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    component.todos = [new Todo({ id: 1, title: 'Read article', complete: false })];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
