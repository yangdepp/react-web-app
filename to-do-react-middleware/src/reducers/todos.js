import {
  ADD_TODO,
  TOGGLE_TODO,
  FETCH_TODOS_FAILUER,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
} from '../actions/actionTypes';

const initState = {
  isFetching: false,
  error: null,
  data: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    case FETCH_TODOS_FAILUER:
      return {
        ...state,
        isFetching: false,
        data: action.error,
      };
    default:
      return {
        ...state,
        data: todos(state.data, action),
      };
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((item) =>
        item.id === action.id
          ? {
              ...item,
              completed: !item.completed,
            }
          : item,
      );
    default:
      return state;
  }
};
export default reducer;
