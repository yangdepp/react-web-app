import { connect } from "react-redux";
import { setTodoText, addTodo } from "../actions";
import AddTodo from "../components/AddTodo";

const mapStateToProps = state => ({
  text: state.text
});

const mapDispatchToProps = dispatch => ({
  setTodoText: text => dispatch(setTodoText(text)),
  addTodo: text => dispatch(addTodo(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
