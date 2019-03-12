import React from 'react';
import TodoItem from './TodoItem'

class TodoList extends React.Component {
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

  handleItemClick(index) {
    let list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }

  render() {
    return (
      <div className="TodoList">
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}></input>
          <button onClick={this.handleBtnClick.bind(this)}>点击</button>
        </div>
        <ul>
          {
            this.state.list.map((item,index) => {
              return <TodoItem key={index} content={item}></TodoItem>
              // return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
