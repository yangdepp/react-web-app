import React, {Component} from 'react';

class AddTodo extends Component {

  handleClick = () => {
    this.props.addTodo(this.props.text)
  }
  handleChange = (e) => {
    this.props.setTodoText(e.target.value)
  }

  render() {
    return (
        <div>
          <input type="text" value={this.props.text} onChange={this.handleChange}/>
          <button onClick={this.handleClick}>Add</button>
        </div>
    );
  }
}

export default AddTodo;