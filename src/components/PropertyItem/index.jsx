import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `0px ${theme.spacing(2)}px`
  }
}));

const PropertyItem = ({ title, value, ...otherProps }) => {
  const classes = useStyles();

  return (
    <p className={classes.root} {...otherProps}>
      <Typography variant="body2" component="span">
        {title}
        {`: `}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="span">
        {value}
      </Typography>
    </p>
  );
};

PropertyItem.propTypes = {
  title: PropTypes.node,
  value: PropTypes.node
};

PropertyItem.defaultProps = {
  title: "",
  value: ""
};

export default PropertyItem;
