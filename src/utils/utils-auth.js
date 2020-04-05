import React, { Component } from "react";
import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect";
import { getState } from "../store/store";
import ROUTES from "../config/route.js";

export const auth = connectedRouterRedirect({
  allowRedirectBack: true,
  authenticatedSelector: state => !!state.rSession["isLogin"],
  redirectPath: (state, ownProps) => {
    if (ownProps.location.pathname.indexOf("?") === -1) {
      return ROUTES.LOGIN;
    }
    return locationHelper.getRedirectQueryParam(ownProps) || ROUTES.LOGIN;
  },
  wrapperDisplayName: "UserIsAuthenticated"
});

export const notAuth = connectedRouterRedirect({
  allowRedirectBack: false,
  authenticatedSelector: state => !state.rSession["isLogin"],
  redirectPath: (state, ownProps) => {
    if (ownProps.location.pathname.indexOf("?") === -1) {
      return ROUTES.ROOT;
    }
    return locationHelper.getRedirectQueryParam(ownProps) || ROUTES.ROOT;
  },
  wrapperDisplayName: "UserIsNotAuthenticated"
});

//* info
/*
  role 1 : ROLE_ONE
  role 2 : ROLE_TWO
*/

export const checkRole = (ROLE_ONE, ROLE_TWO) => {
  class CheckRole extends Component {
    constructor(props) {
      super(props);
      this._currentState = getState();
    }
    render() {
      const { rSession } = this._currentState;
      if (rSession.role === 1)
        return ROLE_ONE === null ? (
          null
        ) : (
            <ROLE_ONE {...this.props} />
          );
      else if (rSession.role === 2)
        return ROLE_TWO === null ? (
          null
        ) : (
            <ROLE_TWO {...this.props} />
          );
      else if (rSession.role === 5)
        return ROLE_TWO === null ? (
          null
        ) : (
            <ROLE_TWO {...this.props} />
          );
    }
  }
  CheckRole.displayName = `CheckRole`;
  return CheckRole;
};
