import { connect } from "react-redux";
import { setFilter } from "../actions";
import Footer from "../components/Footer";

const mapStateToProps = state => ({
  filter: state.filter
});

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
