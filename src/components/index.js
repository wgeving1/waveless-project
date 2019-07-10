import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { AppContainer, LeftSide, RightSide } from './styles';

export const unsecuredRoutes = [
  '/',
  '/login',
  '/create-account',
  '/forgot-password'
]

class App extends Component {
  render() {
    // const  { pathname } = this.props.location
    return (
      <AppContainer>
        <LeftSide />
          <Switch>
            <Route exact path="/" component={HomePage} />,
            <Route exact path="/login" component={LoginPage} />,
            <Route exact path="/create-account" component={Register} />,
            <Route exact path="/reset-password" component={Reset} />
          </Switch>
        <RightSide />
      </AppContainer>
    )
  }
}

export default withRouter(App)