import React, { Component, Fragment } from "react";
import TodoItem from './TodoItem'

class Todolist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      list: []
    };

    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  handleBtnClick() {
    this.setState({
      inputValue: "",
      list: [...this.state.list, this.state.inputValue]
    });
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleItemDelete(index) {
    // immutable
    const list = [...this.state.list]; // 必须做个复本重新修改
    list.splice(index, 1);
    this.setState({
      list
    });
  }

  handleInputKeyUp(e) {
    if (e.keyCode === 13) {
      this.handleBtnClick();
    }
  }

  render() {
    return (
      <Fragment>
        <div style={{ marginTop: "6px" }}>
          <label htmlFor="InutArea">ItemName：</label>
          <input
            id="InutArea"
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
            onKeyDown={this.handleInputKeyUp.bind(this)}
          />
          <button
            onClick={this.handleBtnClick.bind(this)}
            style={{
              marginLeft: "5px"
            }}
          >
            Submit
          </button>
        </div>
        <div>
          <ul>
            {this.state.list.map((item, index) => {
              return (
                <TodoItem 
                  key={index} 
                  itemValue={item} 
                  index={index}
                  deleteItem={this.handleItemDelete}
                ></TodoItem>
                // <li
                //   key={index}
                //   onClick={this.handleItemDelete.bind(this, index)}
                //   dangerouslySetInnerHTML={{__html: item}}
                // >
                // </li>
              );
            })}
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Todolist;
