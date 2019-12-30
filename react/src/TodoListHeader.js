import React from 'react';

class TodoListHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newTodoTitle: '' };
  }

  handleTodoTitleChange = e => {
    this.setState({ newTodoTitle: e.target.value });
  };

  addTodo = e => {
    if (e.keyCode !== 13 || this.state.newTodoTitle === '') {
      return;
    }
    this.props.add(this.state.newTodoTitle);
    this.setState({ newTodoTitle: '' });
  };

  render() {
    return (
      <header className="header">
        <h1>Todos</h1>
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.newTodoTitle}
          onChange={this.handleTodoTitleChange}
          onKeyUp={this.addTodo}
        />
      </header>
    );
  }
}

export default TodoListHeader;
