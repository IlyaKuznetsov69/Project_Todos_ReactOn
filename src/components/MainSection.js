import React from 'react';

import ToggleAllContainer from '../containers/ToggleAllContainer';
import ListContainer from '../containers/ListContainer';
import Footer from './Footer';

const MainSection = ({ itemsQuantity }) => {

  if (itemsQuantity > 0) {
    return (
      <section className="main">
        <ToggleAllContainer />
        <ListContainer />
        <Footer />
      </section>
    )
  } return null
}

export default MainSection;