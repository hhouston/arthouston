import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { render } from 'react-dom';

import App from './app';
import ProfileContainer from './profile/profile_container';
import HomeContainer from './home/home_container';

function hashLinkScroll() {
  const { hash } = window.location;
  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }, 0);
  }
}

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  return(
    <Provider store={ store }>
      <Router history={ browserHistory } onUpdate={hashLinkScroll}>
        <Route path="/" component={ App }>
          <IndexRoute component={ HomeContainer } />
          <Route path="/profile" component={ ProfileContainer } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
