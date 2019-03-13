import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        'learn english',
        'learn react',
        'learn vue'
      ],
      inputValue: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleInputChange(e){
    this.setState({
      inputValue: e.target.value
    })
  }

  handleDeleteItem(index) {
    let list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }

  getListContent() {
    return (
      this.state.list.map((item,index) => {
        return <TodoItem 
                key={index} 
                content={item} 
                index={index} 
                delete={this.handleDeleteItem}>
                </TodoItem>
      })
    )
  }

  render() {
    const { inputValue } = this.state;
    return (
      <Fragment>
        <div>
          <input value={inputValue} onChange={this.handleInputChange}></input>
          <button className='red-btn' onClick={this.handleBtnClick}>点击</button>
        </div>
        <ul>{this.getListContent()}</ul>
      </Fragment>
    );
  }
}

export default TodoList;
