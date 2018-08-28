import React, { Component } from "react";

class Todolist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      list: []
    };
  }

  handleBtnClick() {
    this.setState({
      inputValue: '',
      list: [...this.state.list, this.state.inputValue]
    })
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleItemDelete(index) {
    // immutable
    const list = [...this.state.list]   // 必须做个复本重新修改
    list.splice(index, 1)
    this.setState({
      list
    })
  }

  render() {
    return (
      <div style={{ marginTop: "6px" }}>
        <div>
          <label>ItemName：</label>
          <input 
            value={this.state.inputValue} 
            onChange={this.handleInputChange.bind(this)}
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
              return <li key={index} onClick={this.handleItemDelete.bind(this, index)}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Todolist;
