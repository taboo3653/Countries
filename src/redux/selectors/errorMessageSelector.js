import _ from "lodash";

const createErrorMessageSelector = (actions) => (state) => {
  // returns the first error messages for actions
  // * We assume when any request fails on a page that
  //   requires multiple API calls, we shows the first error
  return (
    _(actions)
      .map((action) => _.get(state, `errorReducer.${action}`))
      .compact()
      .first() || ""
  );
};

export default createErrorMessageSelector;
