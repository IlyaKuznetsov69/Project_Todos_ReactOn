import { filters } from '../actions/actions';

const toggleFilter = (state = filters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}

export default toggleFilter;