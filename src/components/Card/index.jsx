import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import MuiCard from "@material-ui/core/Card";
import MuiCardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  body: {
    textAlign: "left",
  },
}));

const Card = ({ title = "", value }) => {
  const classes = useStyles();

  return (
    <MuiCard>
      <MuiCardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {title}
        </Typography>
        <div className={classes.body}>{value}</div>
      </MuiCardContent>
    </MuiCard>
  );
};

export default Card;
