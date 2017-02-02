import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import HomeContainer from './home/home_container';

const App = ({ children }) => (
  <div>
    <header>
      <HomeContainer />
    </header>
    { children }
  </div>
);

export default App;
