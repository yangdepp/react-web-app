import React, {Component} from 'react';
import AddTodo from './AddTodo'
import Footer from './Footer'
import TodoList from './TodoList'


class App extends Component {
  render() {
    return (
        <div>
          <AddTodo/>
          <TodoList/>
          <Footer/>
        </div>
    )
        ;
  }
}

export default App;