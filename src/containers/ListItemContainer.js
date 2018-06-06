import { connect } from 'react-redux';

import ListItem from '../components/ListItem';
import { deleteListItem, toggleListItem, changeListItemView, editListItem } from '../actions/actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleItem: () => dispatch(toggleListItem(ownProps.id)),
  deleteItem: () => dispatch(deleteListItem(ownProps.id)),
  changeItemView: () => dispatch(changeListItemView(ownProps.id)),
  editItem: (event) => {
    let text = event.target.value;
    dispatch(editListItem(ownProps.id, text));
    dispatch(changeListItemView(ownProps.id));
  },
  editItemConfirm: (event) => {
    let text = event.target.value;
    if (event.key === "Enter") {
      dispatch(editListItem(ownProps.id, text));
      dispatch(changeListItemView(ownProps.id));
    }
  }
})

export default connect(null, mapDispatchToProps)(ListItem);