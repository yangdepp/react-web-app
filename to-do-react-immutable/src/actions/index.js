import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  SET_TODO_TEXT,
  FETCH_TODOS_FAILUER,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
} from './actionTypes';
let nextTodoId = 0;

const fetchTodosRequest = () => ({
  type: FETCH_TODOS_REQUEST,
});
const fetchTodosSuccess = (data) => ({
  type: FETCH_TODOS_SUCCESS,
  data,
});
const fetchTodosFailuer = (error) => ({
  type: FETCH_TODOS_FAILUER,
  error,
});

export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(fetchTodosRequest());
    return fetch('./mock/todos.json').then(
      (response) => {
        response.json().then((data) => {
          dispatch(fetchTodosSuccess(data));
        });
      },
      (error) => {
        dispatch(fetchTodosFailuer(error));
        console.log('error is' + error);
      },
    );
  };
};

// 新增代办事项
export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text,
});

// 更改代办事项状态
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

// 设置过滤状态
export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter,
});

//  设置新增文本
export const setTodoText = (text) => ({
  type: SET_TODO_TEXT,
  text,
});
