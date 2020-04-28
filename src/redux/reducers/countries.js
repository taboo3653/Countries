const initialState = {
  countryList: [],
  currentCountry: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_COUNTRY_SUCCESS":
      return {
        ...state,
        currentCountry: action.payload,
      };
    case "GET_COUNTRY_LIST_SUCCESS":
      return {
        ...state,
        countryList: action.payload,
      };
    default:
      return state;
  }
};
