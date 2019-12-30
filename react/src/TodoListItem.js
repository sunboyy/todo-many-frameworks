import React from 'react';

function TodoListItem(props) {
  const toggleTodoCompleted = todo => {
    return () => {
      props.toggleCompleted(todo);
    };
  };

  const removeTodo = todo => {
    return () => {
      props.remove(todo);
    };
  };

  return (
    <div className="view">
      <input
        type="checkbox"
        className="toggle"
        checked={props.todo.completed}
        onClick={toggleTodoCompleted(props.todo)}
      />
      <label>{props.todo.title}</label>
      <button className="destroy" onClick={removeTodo(props.todo)}></button>
    </div>
  );
}

export default TodoListItem;
