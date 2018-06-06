import { connect } from 'react-redux';

import List from '../components/List';
import { filters } from '../actions/actions';

const getList = (items, filter) => {
  switch (filter) {
    case filters.SHOW_ALL:
      return items;
    case filters.SHOW_COMPLETED:
      return items.filter((item) => {
        return item.completed
      })
    case filters.SHOW_ACTIVE:
      return items.filter((item) => {
        return !item.completed
      })
    default:
      return items;
  }
}

const mapStateToProps = (state) => ({
  listItems: getList(state.listItems, state.selectedFilter)
})

export default connect(mapStateToProps, null)(List);
