import React from 'react';

import { filters } from '../actions/actions';
import CounterContainer from '../containers/CounterContainer';
import ClearButtonContainer from '../containers/ClearButtonContainer';
import FilterContainer from '../containers/FilterContainer';

const Footer = () => {
  /* 
    деструктурируй везде где это возможно
    так код становиться более понятным и декларативным
    конкретно здесь const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = filters
  */
  return (
    <footer className="footer">
      <CounterContainer />
      <ul className="filters">
        <FilterContainer
          ownFilter={filters.SHOW_ALL}
          href="#/"
          className="filter all"
          text="Всего"
        />
        <FilterContainer
          ownFilter={filters.SHOW_ACTIVE}
          href="#/active"
          className="filter active"
          text="В процессе"
        />
        <FilterContainer
          ownFilter={filters.SHOW_COMPLETED}
          href="#/completed"
          className="filter compl"
          text="Завершено"
        />
      </ul>
      <ClearButtonContainer />
    </footer>
  )
}

export default Footer;