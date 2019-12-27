import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

import { TodosComponent } from './todos.component';
import { TodoListHeaderComponent } from '../todo-list-header/todo-list-header.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { TodoListFooterComponent } from '../todo-list-footer/todo-list-footer.component';
import { ApiService } from '../api.service';
import { ApiMockService } from '../api-mock.service';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { Todo } from '../todo';
import { AppRoutingModule } from '../app-routing.module';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        TodosComponent,
        TodoListHeaderComponent,
        TodoListComponent,
        TodoListItemComponent,
        TodoListFooterComponent,
        PageNotFoundComponent
      ],
      providers: [
        {
          provide: ApiService,
          useClass: ApiMockService
        },
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        },
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({ todos: [] })
          }
        },
        {
          provide: Router,
          useClass: AppRoutingModule
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    component.todos = [new Todo({ id: 1, title: 'Read article', complete: false })];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
