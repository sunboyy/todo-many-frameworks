import React from 'react';

function TodoListFooter(props) {
  if (props.todos.length === 0) {
    return null;
  }
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{props.todos.length}</strong> {props.todos.length === 1 ? 'item' : 'items'} left
      </span>
    </footer>
  );
}

export default TodoListFooter;
