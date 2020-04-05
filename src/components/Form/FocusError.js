import React from "react";
import { connect } from "formik";

class FocusError extends React.Component {
  componentDidUpdate(prevProps) {
    const { isSubmitting, isValidating, errors } = prevProps.formik;
    const keys = Object.keys(errors);
    if (keys.length > 0 && isSubmitting && !isValidating) {
      const selector = `[name="${keys[0]}"]`;
      const errorElement = document.querySelector(selector);
      // var rect = errorElement.getBoundingClientRect();

      // a hack to focus on the react-select control >  these are the name of the select in our project
      if (errorElement) {
        if (
          keys[0] === "type" ||
          keys[0] === "state" ||
          keys[0] === "adminId" ||
          keys[0] === "district" ||
          keys[0] === "gender" ||
          keys[0] === "designationId" ||
          keys[0] === "specialty1Id" ||
          keys[0] === "homeState" ||
          keys[0] === "officeState" ||
          keys[0] === "roleId"
        ) {
          errorElement.type = "text"; // this will makes the control focusable , default it is hidden
          errorElement.focus();
          errorElement.type = "hidden"; // after focus set it to hidden back
        }
        errorElement.focus(); // executed for other input controlls
      }
    }
  }

  render() {
    return null;
  }
}

export default connect(FocusError);
