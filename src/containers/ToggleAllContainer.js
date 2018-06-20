import { connect } from 'react-redux';

import ToggleAll from '../components/ToggleAll';
import { toggleAllItems } from '../actions/actions';

const getTogglerState = (items) => {
  const totalQuantity = items.length;
  const completedQuantity = (items.filter(item => item.completed)).length;
  if (totalQuantity === 0) {
    return false
  } return totalQuantity === completedQuantity
}

const mapStateToProps = ({ listItems }) => ({
  togglerChecked: getTogglerState(listItems)
})

const mapDispatchToProps = (dispatch) => ({
  toggle: (event) => {
    let active = event.currentTarget.checked;
    dispatch(toggleAllItems(active))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ToggleAll);
