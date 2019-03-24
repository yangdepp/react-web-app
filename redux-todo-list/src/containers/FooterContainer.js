import {connect} from 'react-redux'
import Footer from "../components/Footer";
import {setFilter} from "../actions";
import filter from "../reducers/filter";

const mapStateToProps = state => ({
  filter: state.filter
})

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setFilter(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)