import React from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';
import s from './Header.module.scss';
import { routes } from '../../scenes/router';

function Header () {
  return(
    <header className={s.header}>
      <div className={s.left}>
        <Link to={routes.home}>Marketplace</Link>
      </div>
      <div className={s.right}>
        <Link to={routes.login}>Login</Link>
      </div>
    </header>
  );
};

Header.propTypes = {

};

export default Header;