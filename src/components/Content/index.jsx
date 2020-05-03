import React from "react";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import MainCard from "components/Cards/MainCard";
import BasicCard from "components/Cards/BasicCard";
import NestedListCard from "components/Cards/NestedListCard";
import ListCard from "components/Cards/ListCard";
import Error from "components/Error";

import createLoadingSelector from "mRedux/selectors/loadingSelector";
import createErrorMessageSelector from "mRedux/selectors/errorMessageSelector";

import useMultilang from "hooks/useMultilang";

import dictionary from "utils/dictionary.json";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center"
  }
}));

const actions = ["GET_COUNTRY"];
const loadingSelector = createLoadingSelector(actions);
const errorMessageSelector = createErrorMessageSelector(actions);

const Content = () => {
  const classes = useStyles();
  const getMultilang = useMultilang();

  const { currentCountry } = useSelector((state) => state.countries);
  const isFetching = useSelector((state) => loadingSelector(state));
  const error = useSelector((state) => errorMessageSelector(state));

  const {
    name,
    flag,
    capital,
    region,
    subregion,
    population,
    area,
    demonym,
    numericCode,
    nativeName,
    topLevelDomain,
    timezones,
    callingCodes,
    translations,
    languages,
    currencies,
    alpha2Code,
    alpha3Code,
    altSpellings,
    latlng,
    borders,
    cioc,
    gini
  } = currentCountry;

  const getPropertyPair = (title, value) => [
    getMultilang(dictionary.countryProperties[title]),
    value
  ];

  return (
    <Grid className={classes.root} container spacing={3}>
      {!error ? (
        (Object.keys(currentCountry).length || isFetching) && (
          <>
            <Grid item xs={12} sm={6} md={4}>
              <MainCard title={name} imageUrl={flag} isLoading={isFetching} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <BasicCard
                title={getMultilang(dictionary.countryTitles.basicInfo)}
                values={[
                  getPropertyPair("capital", capital),
                  getPropertyPair("region", region),
                  getPropertyPair("subregion", subregion),
                  getPropertyPair("population", population),
                  getPropertyPair("area", area),
                  getPropertyPair("demonym", demonym),
                  getPropertyPair("numericCode", numericCode),
                  getPropertyPair("nativeName", nativeName),
                  getPropertyPair(
                    "topLevelDomain",
                    (topLevelDomain || []).join(", ")
                  ),
                  getPropertyPair("timezones", (timezones || []).join(", ")),
                  getPropertyPair(
                    "callingCodes",
                    (callingCodes || []).map((code) => `+${code}`).join(", ")
                  )
                ]}
                isLoading={isFetching}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ListCard
                title={getMultilang(dictionary.countryTitles.translations)}
                values={translations}
                isLoading={isFetching}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <NestedListCard
                title={getMultilang(dictionary.countryTitles.languages)}
                values={languages}
                isLoading={isFetching}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <NestedListCard
                title={getMultilang(dictionary.countryTitles.currencies)}
                values={currencies}
                isLoading={isFetching}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <BasicCard
                title={getMultilang(dictionary.countryTitles.otherInfo)}
                values={[
                  getPropertyPair("alpha2Code", alpha2Code),
                  getPropertyPair("alpha3Code", alpha3Code),
                  getPropertyPair("altSpellings", (altSpellings || []).join(", ")),
                  getPropertyPair("latlng", (latlng || []).join("/")),
                  getPropertyPair("borders", (borders || []).join(", ")),
                  getPropertyPair("cioc", cioc),
                  getPropertyPair("gini", gini)
                ]}
                isLoading={isFetching}
              />
            </Grid>
          </>
        )
      ) : (
        <Grid item xs={12} sm={8} md={6} lg={5}>
          <Error
            message={getMultilang(dictionary.errors.countryInfoIsUnavailable)}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default Content;
