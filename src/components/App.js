import React from 'react';

import AddTodo from '../containers/AddTodo';
import MainSectionContainer from '../containers/MainSectionContainer';

const App = () => {

  return (
    <section className="todoapp">
      <header className="header">
        <h1>список дел</h1>
        <AddTodo />
      </header>
      <MainSectionContainer />
    </section>
  )
}

export default App;