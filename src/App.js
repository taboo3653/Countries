import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { useDispatch, useSelector } from "react-redux";

import MainTemplate from "./components/Templates/MainTemplate";
import Input from "./components/Input";
import Content from "./components/Content";

import Error from "./components/Error";

import { fetchCountryList } from "./redux/actions/countries";

import createErrorMessageSelector from "./redux/selectors/errorMessageSelector";

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
      <Container className={classes.container} maxWidth="lg">
        {error ? (
          <Error message={"Sorry! Service is unavailable"} />
        ) : (
          <MainTemplate input={<Input />} result={<Content />} />
        )}
      </Container>
    </div>
  );
};

export default App;
