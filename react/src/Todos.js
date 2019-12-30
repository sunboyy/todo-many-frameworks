import React from 'react';
import { Redirect } from 'react-router-dom';
import './Todos.css';
import TodoListHeader from './TodoListHeader';
import TodoList from './TodoList';
import TodoListFooter from './TodoListFooter';
import { AuthService } from './auth-service';
import { TodoDataService } from './todo-data-service';

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      navigate: ''
    };
    this.doSignOut = this.doSignOut.bind(this);
    this.onAddTodo = this.onAddTodo.bind(this);
    this.onToggleTodoCompleted = this.onToggleTodoCompleted.bind(this);
    this.onRemoveTodo = this.onRemoveTodo.bind(this);

    TodoDataService.getAllTodos().then(response => {
      this.setState({ todos: response.data });
    });
  }

  onAddTodo(newTodoTitle) {
    TodoDataService.addTodo({ title: newTodoTitle, completed: false }).then(response => {
      this.setState({ todos: this.state.todos.concat(response.data) });
    });
  }

  onToggleTodoCompleted(todo) {
    TodoDataService.toggleTodoCompleted(todo).then(response => {
      todo = response.data;
      this.setState({ todos: this.state.todos });
    });
  }

  onRemoveTodo(todo) {
    TodoDataService.deleteTodoByID(todo.id).then(_ => {
      this.setState({ todos: this.state.todos.filter(t => t.id !== todo.id) });
    });
  }

  doSignOut() {
    AuthService.doSignOut();
    this.setState({ navigate: '/sign-in' });
  }

  render() {
    if (!AuthService.isSignedIn()) {
      return <Redirect to="/sign-in" />;
    }
    if (this.state.navigate) {
      return <Redirect to={this.state.navigate} />;
    }
    return (
      <>
        <section className="todoapp">
          <TodoListHeader add={this.onAddTodo} />
          <TodoList
            todos={this.state.todos}
            toggleCompleted={this.onToggleTodoCompleted}
            remove={this.onRemoveTodo}
          />
          <TodoListFooter todos={this.state.todos} />
        </section>
        <button className="bottom-button" onClick={this.doSignOut}>
          Sign out
        </button>
      </>
    );
  }
}

export default Todos;
