import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import ROUTES from './config/route';
import { auth, notAuth, checkRole } from './utils/utils-auth.js'

//* Components
import Dashboard from './Pages/Dashboard/Dashboard';

const Routes = () => {
    return (
        <Switch>
            {/* <Route exact path={ROUTES.LOGIN} component={notAuth(Login)} /> */}
            <Route path={ROUTES.DASHBOARD} component={notAuth(Dashboard)} />
            {/* <Route path={ROUTES.ERROR} component={notAuth(ErrorPage404)} /> */}
            {/* <Route exact path={ROUTES.DASHBOARD} component={auth(checkRole(AdminDashboard, GroupsAndPhysicians))} /> */}
            <Redirect from="/" to={ROUTES.DASHBOARD} />
        </Switch>
    )
}

export default Routes;
