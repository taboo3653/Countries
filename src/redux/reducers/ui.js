const initialState = {
  isOpenSidePanel: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_SIDE_PANEL":
      return {
        ...state,
        isOpenSidePanel: true,
      };
    case "CLOSE_SIDE_PANEL":
      return {
        ...state,
        isOpenSidePanel: false,
      };
    case "TOGGLE_SIDE_PANEL":
      return {
        ...state,
        isOpenSidePanel: !state.isOpenSidePanel,
      };
    default:
      return state;
  }
};
