import React, { useEffect } from "react";

import { ThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import { useDispatch, useSelector } from "react-redux";

import Input from "./components/Input";
import Content from "./components/Content";
import Error from "./components/Error";
import AppBar from "./components/AppBar";
import SidePanel from "./components/SidePanel";

import { fetchCountryList } from "./redux/actions/countries";
import createErrorMessageSelector from "./redux/selectors/errorMessageSelector";

import MultilangString from "./components/MultilangString";
import dictionary from "./utils/dictionary.json";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  container: {
    padding: theme.spacing(3),
  },
  mainGrid: {
    justifyContent: "center",
  },
}));

const actions = ["GET_COUNTRY_LIST"];
const errorMessageSelector = createErrorMessageSelector(actions);

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountryList());
  }, [dispatch]);

  const error = useSelector((state) => errorMessageSelector(state));

  const { textSize } = useSelector((state) => state.system);

  const mainTheme = createMuiTheme({
    typography: {
      fontSize: Number(textSize),
    },
  });

  return (
    <ThemeProvider theme={mainTheme}>
      <div className={classes.root}>
        <AppBar />
        <Container className={classes.container} maxWidth="lg">
          {!error ? (
            <>
              <SidePanel />
              <Grid className={classes.mainGrid} container spacing={3}>
                <Grid item xs={12} sm={8} md={6}>
                  <Input />
                </Grid>
                <Grid item container>
                  <Content />
                </Grid>
              </Grid>
            </>
          ) : (
            <Error
              message={
                <MultilangString value={dictionary.errors.appIsUnavaliable} />
              }
            />
          )}
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default App;
