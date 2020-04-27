import { getAllCountries, getCountryByCode } from "../../api/restCountriesApi";

export const fetchCountryList = () => (dispatch) => {
  dispatch({ type: "GET_COUNTRY_LIST_REQUEST" });

  return getAllCountries(["name", "alpha3Code", "currencies"])
    .then((countryList) => {
      dispatch({
        type: "GET_COUNTRY_LIST_SUCCESS",
        payload: countryList,
      });
    })
    .catch((err) => {
      dispatch({
        type: "GET_COUNTRY_LIST_FAILURE",
        payload: err,
      });
    });
};

export const fetchCountryByCode = (code) => (dispatch) => {
  dispatch({ type: "GET_COUNTRY_REQUEST" });

  return getCountryByCode(code)
    .then((country) => {
      dispatch({
        type: "GET_COUNTRY_SUCCESS",
        payload: country,
      });
    })
    .catch((err) => {
      dispatch({
        type: "GET_COUNTRY_FAILURE",
        payload: err,
      });
    });
};
