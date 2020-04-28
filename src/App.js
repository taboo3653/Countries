import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { useDispatch, useSelector } from "react-redux";

import MainTemplate from "./components/Templates/MainTemplate";
import Input from "./components/Input";
import Content from "./components/Content";
import Error from "./components/Error";
import AppBar from "./components/AppBar";
import SidePanel from "./components/SidePanel";

import { fetchCountryList } from "./redux/actions/countries";

import createErrorMessageSelector from "./redux/selectors/errorMessageSelector";

import MultilangString from "./components/MultilangString";
import dictionary from "./utils/dictionary.json";

import "./App.css";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
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

  return (
    <div className="App">
      <AppBar />
      <SidePanel />
      <Container className={classes.container} maxWidth="lg">
        {!error ? (
          <MainTemplate input={<Input />} result={<Content />} />
        ) : (
          <Error
            message={<MultilangString value={dictionary.errors.appIsUnavaliable} />}
          />
        )}
      </Container>
    </div>
  );
};

export default App;
