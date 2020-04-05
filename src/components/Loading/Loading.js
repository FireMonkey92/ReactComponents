import React from "react";
import PropTypes from "prop-types";

import "./Loading.less";

const Loading = ({ isLoading }) => {
  if (isLoading == true)
    return (
      <div id="loadingScreen">
        <div></div>
        <div></div>
      </div>
    );
  else return null;
};

export default Loading;
