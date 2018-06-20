import { connect } from 'react-redux';

import List from '../components/List';
import { filters } from '../actions/actions';

const getList = (items, filter) => {
  const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = filters;
  switch (filter) {
    case SHOW_ALL:
      return items;
    case SHOW_COMPLETED:
      return items.filter(item => item.completed);
    case SHOW_ACTIVE:
      return items.filter(item => !item.completed);
    default:
      return items;
  }
}

const mapStateToProps = ({ listItems, selectedFilter }) => ({
  listItems: getList(listItems, selectedFilter)
})

export default connect(mapStateToProps, null)(List);
