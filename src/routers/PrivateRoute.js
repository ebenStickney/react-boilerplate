import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from "../components/Header";

export const PrivateRoute = ({ isAuth, component: Component, ...rest}) => (
  <Route {...rest} component={(props) => (
    isAuth ? (
      <div>
      <Header />
      <Component {...props} />
      </div>
    ) : (
      <Redirect to='/' />
    )

  )} />

);

const mapStatetoProps = (state) => ({
  isAuth: !!state.auth.uid
});

export default connect(mapStatetoProps)(PrivateRoute)
