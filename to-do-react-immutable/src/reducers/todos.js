import Immutable from "immutable";
import {
  ADD_TODO,
  TOGGLE_TODO,
  FETCH_TODOS_FAILUER,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS
} from "../actions/actionTypes";

const initState = {
  isFetching: false,
  error: null,
  data: []
};

const reducer = (state = Immutable.fromJS(initState), action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return state.set("isFetching", true);
    case FETCH_TODOS_SUCCESS:
      return state.merge({
        isFetching: false,
        data: Immutable.fromJS(action.data)
      });
    case FETCH_TODOS_FAILUER:
      return state.merge({
        isFetching: false,
        error: action.error
      });
    default:
      const data = state.get("data");
      return state.set("data", todos(data, action));
  }
};

const todos = (state = Immutable.fromJS([]), action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = Immutable.fromJS({
        id: action.id,
        text: action.text,
        completed: false
      });
      return state.push(newTodo);
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.get("id") === action.id ? todo.set("completed", !todo.get("completed")) : todo
      );
    default:
      return state;
  }
};
export default reducer;
