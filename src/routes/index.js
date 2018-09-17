import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import SearchPage from 'containers/SearchPage';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={SearchPage}/>
      </Switch>
    );
  }
}

export default Routes;
