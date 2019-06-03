import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import Auth from './Auth/Auth';
import Inbox from './Inbox/Inbox';
import Terms from './Terms/Terms';
import Privacy from './Privacy/Privacy';
import Bookmarks from './Bookmarks/Bookmarks';
import Profile from './Profile/Profile';
import User from './User/User';
import Listing from './Listing/Listing';
import Search from './Search/Search';
import Api from '../api';
import { Redirect } from 'react-router-dom';


export const routes = {
  home: '/',
  auth: '/auth',
  inbox: '/inbox',
  login: '/auth/login',
  register: '/auth/register',
  terms: '/terms',
  privacy: '/privacy',
  bookmarks: '/bookmarks',
  profile: '/profile',
  user: '/users/:id',
  listing: '/listings/:id',
  search: '/search',
};

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <PrivateRoute path={routes.inbox} component={Inbox} />
        <Route path={routes.auth} component={Auth} />
        <Route path={routes.terms} component={Terms} />
        <Route path={routes.privacy} component={Privacy} />
        <Route path={routes.bookmarks} component={Bookmarks} />
        <Route path={routes.profile} component={Profile} />
        <Route path={routes.user} component={User} />
        <Route path={routes.listing} component={Listing} />
        <Route path={routes.search} component={Search} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        Api.Auth.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={routes.login} />
        )
      }
    />
  );
}