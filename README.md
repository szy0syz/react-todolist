# React-Todolist

## 第一版

> todolist原型实现

## 第二版：组件化思想

* 不想在每个组件都包裹一个无用的元素
  * 解决办法：`Fragment`
* 特定情况转义string到html
* 单独创建 `TodoItem` 组件
  * 父组件 `TodoList` 把属性和方法通过 `props` 传递给子组件
  * 这样子组件就可以通过调用父组件传来的方法改变父组件里的数据

  ## 第三版：优化

  * 组件render函数里，竟然把需要操作的变量提前解构好
  * 简化render函数，把逻辑拆分到一个新的函数中去
  * `this.setState` 使用异步方式，即传函数，而不是对象。这样写还可以防止用户不小心修改到state的状态
    * 一些逻辑也可以丢到setState的函数体里