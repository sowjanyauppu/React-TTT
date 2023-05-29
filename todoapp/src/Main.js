import { render } from 'react-dom';
import React,{Component} from 'react';
import Header from './components/Header';
import Footer  from './components/Footer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  addTodo = (todo) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, todo]
    }));
  }

  toggleComplete = (index) => {
    this.setState((prevState) => {
      const todos = [...prevState.todos];
      todos[index].completed = !todos[index].completed;
      return { todos };
    });
  }

  deleteTodo = (index) => {
    this.setState((prevState) => {
      const todos = [...prevState.todos];
      todos.splice(index, 1);
      return { todos };
    });
  }

  render() {
    const { todos } = this.state;
    return  (
        <div>
          <Header />
          <TodoForm addTodo={this.addTodo} />
          <TodoList
            todos={todos}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
          />
          <Footer />
        </div>
      );
    }
  }
  
  export default Main;