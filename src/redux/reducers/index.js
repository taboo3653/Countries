import { combineReducers } from "redux";

const reducers = ["loadingReducer", "errorReducer", "countries"];

export default combineReducers(
  reducers.reduce((initial, name) => {
    // eslint-disable-next-line global-require
    initial[name] = require(`./${name}`).default;
    return initial;
  }, {})
);
