import { getAllCountries, getCountryByCode } from "../../api/restCountriesApi";
import { getItem, setItem } from "../../utils/cacheService";

export const fetchCountryList = () => async (dispatch) => {
  dispatch({ type: "GET_COUNTRY_LIST_REQUEST" });

  try {
    const countryList = await getAllCountries(["name", "alpha3Code", "currencies"]);

    dispatch({
      type: "GET_COUNTRY_LIST_SUCCESS",
      payload: countryList,
    });
  } catch (err) {
    dispatch({
      type: "GET_COUNTRY_LIST_FAILURE",
      payload: err,
    });
  }
};

export const fetchCountryByCode = (code) => async (dispatch) => {
  dispatch({ type: "GET_COUNTRY_REQUEST" });
  const cahcedCountry = getItem(code);

  try {
    let country;

    if (cahcedCountry) country = cahcedCountry;
    else {
      country = await getCountryByCode(code);
      setItem(code, country, 1);
    }

    dispatch({
      type: "GET_COUNTRY_SUCCESS",
      payload: country,
    });
  } catch (err) {
    dispatch({
      type: "GET_COUNTRY_FAILURE",
      payload: err,
    });
  }
};
