import React, { Component } from 'react';
import { Icon } from 'react-golu'

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  handleClick = () => {
    this.props.addTodo(this.state.text)
    this.setState({
      text: ''
    })
  }
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  clickIcon(){
    console.log('111')
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.text} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add</button>
        <Icon name="wechat" onClick={this.clickIcon.bind(this)}></Icon>
        <Icon name="alipay"></Icon>
      </div>
    );
  }
}

export default AddTodo;