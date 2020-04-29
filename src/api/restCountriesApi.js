import { get } from "utils/fetch";

const url = "https://restcountries.eu/rest/v2/";

export const getAllCountries = (parameters) => {
  const parametersForRequest =
    parameters && Array.isArray(parameters) ? parameters.join(";") : "";

  return get(`${url}all?fields=${parametersForRequest}`);
};

export const getCountryByCode = (code) => {
  return get(`${url}alpha/${code}`);
};

/*
export const getCountryByPartialName = () => {
  return null;
};

export const getCountryByPartialName = () => {
  return null;
};

export const getCountryByFullName = () => {
  return null;
};



export const getCountryByCurrency = () => {
  return null;
};
*/
