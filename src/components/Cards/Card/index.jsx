import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import MuiCard from "@material-ui/core/Card";
import MuiCardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  body: {
    textAlign: "left",
  },
  skeleton: {
    height: "300px",
  },
}));

const Card = ({ title, value, isLoading }) => {
  const classes = useStyles();

  return !isLoading ? (
    <MuiCard>
      <MuiCardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {title}
        </Typography>
        <div className={classes.body}>{value}</div>
      </MuiCardContent>
    </MuiCard>
  ) : (
    <Skeleton className={classes.skeleton} variant="rect" />
  );
};

Card.propTypes = {
  title: PropTypes.node,
  value: PropTypes.node,
  isLoading: PropTypes.bool,
};

Card.defaultProps = {
  title: "",
  value: "",
  isLoading: false,
};

export default Card;
