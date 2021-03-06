import { connect } from 'react-redux';

import { deleteAllCompleted } from '../actions/actions';
import ClearButton from '../components/ClearButton';

const getButtonState = (items) => {
  const completedQuantity = (items.filter((item) => item.completed === true)).length
  return (completedQuantity > 0) ? true : false
}

const mapStateToProps = ({ listItems }) => ({
  buttonVisible: getButtonState(listItems)
})

const mapDispatchToProps = (dispatch) => ({
  clearCompleted: () => dispatch(deleteAllCompleted())
})

export default connect(mapStateToProps, mapDispatchToProps)(ClearButton);