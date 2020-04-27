import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
  },
}));

const MainTemplate = ({ input, result }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid item xs={12} sm={8} md={6} lg={5}>
        {input}
      </Grid>
      <Grid item container>
        {result}
      </Grid>
    </Grid>
  );
};

export default MainTemplate;
