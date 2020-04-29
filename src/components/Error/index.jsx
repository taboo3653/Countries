import React from "react";
import PropTypes from "prop-types";

import Alert from "@material-ui/lab/Alert";

const Error = ({ message }) => {
  return (
    <Alert variant="outlined" severity="error">
      {message}
    </Alert>
  );
};

Error.propTypes = {
  message: PropTypes.node,
};

Error.defaultProps = {
  message: "",
};

export default Error;
