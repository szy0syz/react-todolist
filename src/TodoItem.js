import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // 那么问题来了，子组件是不能修改父组件的数据。所以只能让子组件调用父组件修改数据的方法来修改父组件数据
    // this.props.deleteItem(this.props.index);
    // --> 上面的调用好比在调用这个函数 this.handleItemDelete，但这个方法是父组件的，子组件拿不到啊
    // --> 所以我们需要在父组件里传递handleDeleteItem时就把this强制绑定成父组件的this
    const { deleteItem, index } = this.props
    deleteItem(index)
  }

  render() {
    const { itemValue } = this.props;
    return <li onClick={this.handleClick}>{itemValue}</li>;
  }
}

export default TodoItem;
