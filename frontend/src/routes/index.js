import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import { SignIn, SignUp, Dashboard } from '~/pages';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/registrar" exact component={SignUp} />

      <Route path="/dashboard" exact component={Dashboard} isPrivate />
    </Switch>
  );
}
