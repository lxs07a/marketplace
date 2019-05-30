import React from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';
import s from './Login.module.scss';
import { routes } from '../router';

function Login() {
  return (
    <div>
      <Link to={routes.register}>Register</Link>
    </div>
  );
}

Login.propTypes = {

};

export default Login;