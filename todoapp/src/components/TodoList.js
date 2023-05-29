import React, { Component } from 'react';

class TodoList extends Component {
  handleCheckboxChange = (index) => {
    this.props.toggleComplete(index);
  }

  handleDeleteClick = (index) => {
    this.props.deleteTodo(index);
  }

  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => this.handleCheckboxChange(index)}
            />
            <span>{todo.title}</span>
            <span>{todo.description}</span>
            <button onClick={() => this.handleDeleteClick(index)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
