import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import T from 'prop-types';
import s from './Header.module.scss';
import { routes } from '../../scenes/router';
import { compose, withHandlers } from 'recompose';
import Api from '../../api';

function Header ({handleLogout}) {
  return(
    <header className={s.header}>
      <div className={s.left}>
        <Link to={routes.home}>Marketplace</Link>
      </div>
      <div className={s.right}>
      {Api.Auth.isLoggedIn ? (
        <button type="button" onClick={handleLogout}>Log Out</button>
      ) : (
        <Link to={routes.login}>Login</Link>
      )}
      </div>
    </header>
  );
};

Header.propTypes = {

};

const enhancer = compose(
  withRouter,
  withHandlers({
    handleLogout: props => () => {
      Api.Auth.logout();
      props.history.push(routes.home);
    }
  }),
)

export default enhancer(Header);