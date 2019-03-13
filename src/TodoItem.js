import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
  }
  
  handleDeleteItem() {
    const { index } = this.props;
    this.props.delete(index);
  }

  render() {
    const { content } = this.props;
    return ( 
      <div onClick={this.handleDeleteItem}>{content}</div>
    );
  }
}
export default TodoItem;