import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `0px ${theme.spacing(2)}px`,
  },
}));

const PropertyItem = ({ title = "", value = "", ...otherProps }) => {
  const classes = useStyles();

  return (
    <p className={classes.root} {...otherProps}>
      <Typography variant="body2" component="span">
        {`${title}: `}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="span">
        {value}
      </Typography>
    </p>
  );
};

export default PropertyItem;
