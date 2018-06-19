import { connect } from 'react-redux';

import ToggleAll from '../components/ToggleAll';
import { toggleAllItems } from '../actions/actions';

const getTogglerState = (items) => {
  /* используй const */
  let totalQuantity = items.length;
  let completedQuantity = (items.filter(item => item.completed)).length;
  /* зачем else ? можно просто return */
  if (totalQuantity === 0) {
    return false
  } else return totalQuantity === completedQuantity
}

/* деструктурируй state */
const mapStateToProps = (state) => ({
  togglerState: getTogglerState(state.listItems)
})

const mapDispatchToProps = (dispatch) => ({
  /* не нужно сюда прокидывать событие сразу передавай состояние checked */
  toggle: (event) => {
    let active = event.currentTarget.checked;
    dispatch(toggleAllItems(active))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ToggleAll);
