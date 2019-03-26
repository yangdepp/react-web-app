import {connect} from 'react-redux'
import TodoList from "../components/TodoList";
import {toggleTodo, fetchTodos} from "../actions";

const getVisableTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos
    case 'completed':
      return todos.filter(t => t.completed)
    case 'active':
      return todos.filter(t => !t.completed)
    default:
      return new Error('Unknown filter:' + filter)
  }
}


//  把store中的state映射到组件中的props
const mapStateToProps = (state) => ({
  todos: getVisableTodos(state.todos.data, state.filter),
})

//  把store中的action方法映射到组件中的props
const mapDispatchToProps = (dispatch) => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  fetchTodos: () => dispatch(fetchTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)