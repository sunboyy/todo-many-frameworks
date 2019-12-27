import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { TodosComponent } from './todos/todos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListFooterComponent } from './todo-list-footer/todo-list-footer.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { TodosResolver } from './todos.resolver';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    TodosComponent,
    PageNotFoundComponent,
    TodoListHeaderComponent,
    TodoListComponent,
    TodoListFooterComponent,
    TodoListItemComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [TodosResolver],
  bootstrap: [AppComponent]
})
export class AppModule {}
