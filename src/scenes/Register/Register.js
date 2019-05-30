import React from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';
import s from './Register.module.scss';
import { routes } from '../router';

function Register() {
  return (
    <div>
      <Link to={routes.login}>Login</Link>
    </div>
  );
}

Register.propTypes = {

};

export default Register;