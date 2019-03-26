## redux的一些学习

### redux flow
![avatar](./public/redux-flow.jpeg)

在上图中，可以把React-component组件想象成一个借书人，action-creators相当于借书动作，store相当于一个图书馆管理员，reducer相当于管理员的记录本
当发起借书时，dispatch(action)，派发借书的动作，store接收之后，就去reducer中查询借书记录本（对比前后state）,reducer(state,action)接收state
和action，然后将newState返回给store，store更新state后将state返回给react-component

