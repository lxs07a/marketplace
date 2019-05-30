import React from 'react';
import { Switch, Route } from 'react-router-dom';
import T from 'prop-types';
import s from './Auth.module.scss';
import { Header } from '../../components';
import { routes } from '../router';
import Login from '../Login/Login';
import Register from '../Register/Register';

function Auth () {
  return(
    <Route path={routes.auth}>
      <div className={s.container}>
      <Header/>
      <Switch>
        <Route path={routes.login} component={Login} />
        <Route path={routes.register} component={Register} />
      </Switch>
      </div>
    </Route>
  );
};

Auth.propTypes = {

};

export default Auth;