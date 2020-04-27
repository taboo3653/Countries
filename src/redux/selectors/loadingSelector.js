import _ from "lodash";

const createLoadingSelector = (actions) => (state) => {
  // returns true only when all actions is not loading

  return _(actions).some((action) => _.get(state, `loadingReducer.${action}`));
};

export default createLoadingSelector;
