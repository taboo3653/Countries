import React from "react";

import Alert from "@material-ui/lab/Alert";

const ErrorWindow = ({ message = "" }) => {
  return (
    <Alert variant="outlined" severity="error">
      {message}
    </Alert>
  );
};

export default ErrorWindow;
