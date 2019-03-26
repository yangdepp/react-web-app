## redux的一些学习

### redux flow
![avatar](./public/redux-flow.jpeg)

在上图中，可以把`React-component`组件想象成一个借书人，`action-creators`相当于借书动作，`store`相当于一个图书馆管理员，`reducer`相当于管理员的记录本
当发起借书时，`dispatch(action)`，派发借书的动作，`store`接收之后，就去`reducer`中查询借书记录本（对比前后state）,`reducer(state,action)`接收`state`
和`action`，然后将`newState`返回给`store`，`store`更新`state`后将`state`返回给`react-component`

