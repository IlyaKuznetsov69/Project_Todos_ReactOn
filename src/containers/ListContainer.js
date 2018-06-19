import { connect } from 'react-redux';

import List from '../components/List';
import { filters } from '../actions/actions';

const getList = (items, filter) => {
  /* деструктурируй filters */
  switch (filter) {
    case filters.SHOW_ALL:
      return items;
    case filters.SHOW_COMPLETED:
      /* 
        можно же гораздо короче и понятней записать
        return items.filter(item => item.completed)
      */
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

/* 
  деструктурируй state на уровне параметров функции {}
  const mapStateToProps = ({ listItems, selectedFilter }) ...
*/
const mapStateToProps = (state) => ({
  listItems: getList(state.listItems, state.selectedFilter)
})

export default connect(mapStateToProps, null)(List);
