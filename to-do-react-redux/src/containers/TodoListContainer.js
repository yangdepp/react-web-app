import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo, fetchTodos } from '../actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'completed':
      return todos.filter((t) => t.completed);
    case 'active':
      return todos.filter((t) => !t.completed);
    default:
      return new Error('unknow');
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos.data, state.filter),
});
const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
  fetchTodos: () => dispatch(fetchTodos()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
