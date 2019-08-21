import { createStore } from 'redux';
import rootReducer from './reducers';
import { toggleTodo, setFilter, addTodo, setTodoText } from './actions';

const store = createStore(rootReducer);

// 初始化state
console.log(store.getState());

// 订阅state的变化
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addTodo('Learn React'));
store.dispatch(toggleTodo(0));
store.dispatch(setFilter('active'));
store.dispatch(setTodoText('Learn Redux'));
store.dispatch(addTodo('Learn Router'));

unsubscribe();
