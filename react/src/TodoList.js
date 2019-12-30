import React from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.onToggleTodoCompleted = this.onToggleTodoCompleted.bind(this);
    this.onRemoveTodo = this.onRemoveTodo.bind(this);
  }

  onToggleTodoCompleted(todo) {
    this.props.toggleCompleted(todo);
  }

  onRemoveTodo(todo) {
    this.props.remove(todo);
  }

  render() {
    if (this.props.todos.length === 0) {
      return null;
    }
    return (
      <section className="main">
        <ul className="todo-list">
          {this.props.todos.map(todo => (
            <li className={todo.completed ? 'completed' : ''} key={todo.id}>
              <TodoListItem
                todo={todo}
                toggleCompleted={this.onToggleTodoCompleted}
                remove={this.onRemoveTodo}
              />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default TodoList;
