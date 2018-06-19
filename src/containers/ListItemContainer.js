import { connect } from 'react-redux';

import ListItem from '../components/ListItem';
/* 
  длинный import
  разбивай деструктуризацию на несолько строк
  import {
    deleteListItem,
    toggleListItem,
    ... 
  } 
*/
import { deleteListItem, toggleListItem, changeListItemView, editListItem } from '../actions/actions';

/* очень много однотипного кода попробуй такую штуку
  https://redux.js.org/api-reference/bindactioncreators
*/

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleItem: () => dispatch(toggleListItem(ownProps.id)),
  deleteItem: () => dispatch(deleteListItem(ownProps.id)),
  changeItemView: () => dispatch(changeListItemView(ownProps.id)),
  editItem: (event) => {
    /* исользу const */
    let text = event.target.value;
    dispatch(editListItem(ownProps.id, text));
    dispatch(changeListItemView(ownProps.id));
  },
  editItemConfirm: (event) => {
    /* исользу const */
    let text = event.target.value;
    if (event.key === "Enter") {
      dispatch(editListItem(ownProps.id, text));
      dispatch(changeListItemView(ownProps.id));
    }
  }
})

export default connect(null, mapDispatchToProps)(ListItem);