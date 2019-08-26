import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import { SignIn, SignUp, Dashboard, Details, Create } from '~/pages';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/registrar" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/details/:id" component={Details} isPrivate />
      <Route path="/create" component={Create} isPrivate />
      <Route path="/update/:id" component={Create} isPrivate />
    </Switch>
  );
}
