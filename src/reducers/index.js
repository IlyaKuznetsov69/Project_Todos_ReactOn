import { combineReducers } from 'redux';

import handleListItems from './handleListItems';
import toggleFilter from './toggleFilter';

const mainReducer = combineReducers({
  listItems: handleListItems,
  selectedFilter: toggleFilter
});

export default mainReducer;

