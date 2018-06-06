import { connect } from 'react-redux';

import ToggleAll from '../components/ToggleAll';
import { toggleAllItems } from '../actions/actions';

const getTogglerState = (items) => {
  let totalQuantity = items.length;
  let completedQuantity = (items.filter(item => item.completed)).length;
  if (totalQuantity === 0) {
    return false
  } else return totalQuantity === completedQuantity
}

const mapStateToProps = (state) => ({
  togglerState: getTogglerState(state.listItems)
})

const mapDispatchToProps = (dispatch) => ({
  toggle: (event) => {
    let active = event.currentTarget.checked;
    dispatch(toggleAllItems(active))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ToggleAll);
