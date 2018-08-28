import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";

class Todolist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      list: []
    };

    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleBtnClick() {
    this.setState(prevState => ({
      list: [...prevState.list, prevState.inputValue], // list: [...this.state.list, this.state.inputValue]
      inputValue: ""
    }));
  }

  handleInputChange(e) {
    const { value } = e.target;
    this.setState(() => ({ inputValue: value }));
  }

  handleItemDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list];   // 必须做个复本重新修改 --> immutable
      list.splice(index, 1);
      return { list };
    });
  }

  handleInputKeyUp(e) {
    if (e.keyCode === 13) {
      this.handleBtnClick();
    }
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          itemValue={item}
          index={index}
          deleteItem={this.handleItemDelete}
        />
      );
    });
  }

  render() {
    return (
      <Fragment>
        <div style={{ marginTop: "6px" }}>
          <label htmlFor="InutArea">ItemName：</label>
          <input
            id="InutArea"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            onKeyDown={this.handleInputKeyUp}
          />
          <button
            onClick={this.handleBtnClick}
            style={{
              marginLeft: "5px"
            }}
          >
            Submit
          </button>
        </div>
        <div>
          <ul>{this.getTodoItem()}</ul>
        </div>
      </Fragment>
    );
  }
}

export default Todolist;
