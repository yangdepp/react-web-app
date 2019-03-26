import { ADD_TODO, TOGGLE_TODO, SET_FILTER, SET_TODO_TEXT, FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS, FETCH_TODO_FAILURE } from './action-type'

let nextTodoId = 0

//  请求开始
const fetchTodoRequest = () => ({
  type: FETCH_TODO_REQUEST
})

//  请求成功
const fetchTodoSuccess = (data) => ({
  type: FETCH_TODO_SUCCESS,
  data
})

//  请求失败
const fetchTodoFailure = (error) => ({
  type: FETCH_TODO_FAILURE,
  error
})

//  异步action，返回一个函数
//  可以接收到store的dispatch
export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(fetchTodoRequest());
    return fetch("./mock/todos.json").then(
      response => {
        response.json().then(data => {
          dispatch(fetchTodoSuccess(data));
        })
      },
      error => {
        dispatch(fetchTodoFailure(error));
        console.log(error)
      }
    )
  }
}



export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})


export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})

export const setFilter = filter => ({
  type: SET_FILTER,
  filter
})

export const setTodoText = text => ({
  type: SET_TODO_TEXT,
  text
})