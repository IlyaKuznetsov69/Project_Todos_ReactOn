import { connect } from 'react-redux';

import { setFilter } from '../actions/actions';
import Filter from '../components/Filter';

const getFilterState = (stateFilter, propsFilter) => {
  return (stateFilter === propsFilter) ? true : false
}

const mapStateToProps = (state, ownProps) => ({
  selected: getFilterState(state.selectedFilter, ownProps.ownFilter)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setIt: () => dispatch(setFilter(ownProps.ownFilter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);