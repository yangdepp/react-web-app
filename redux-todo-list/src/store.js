// import {createStore} from 'redux'
// import rootReducer from './reducers'
// import {addTodo, toggleTodo, setTodoText, setFilter} from './actions/index'

// const store = createStore(rootReducer)

// //  初始state
// console.log('000')
// console.log(store.getState())

// //  订阅state变化
// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState())
// })

// //  发送actions
// store.dispatch(addTodo('learn actions'))
// store.dispatch(toggleTodo(0))
// store.dispatch(setFilter('active'))
// store.dispatch(setTodoText('learn'))

// unsubscribe()