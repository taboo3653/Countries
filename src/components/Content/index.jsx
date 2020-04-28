import React from "react";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import MainCard from "../Cards/MainCard";
import BasicCard from "../Cards/BasicCard";
import NestedListCard from "../Cards/NestedListCard";
import ListCard from "../Cards/ListCard";
import Error from "../Error";

import createLoadingSelector from "../../redux/selectors/loadingSelector";
import createErrorMessageSelector from "../../redux/selectors/errorMessageSelector";

import MultilangString from "../MultilangString";
import dictionary from "../../utils/dictionary.json";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
  },
}));

const actions = ["GET_COUNTRY"];
const loadingSelector = createLoadingSelector(actions);
const errorMessageSelector = createErrorMessageSelector(actions);

const Content = () => {
  const classes = useStyles();

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
    gini,
  } = currentCountry;

  const getPropertyPair = (title, value) => [
    <MultilangString value={dictionary.countryProperties[title]} />,
    value,
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
                title={
                  <MultilangString value={dictionary.countryTitles.basicInfo} />
                }
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
                  ),
                ]}
                isLoading={isFetching}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ListCard
                title={
                  <MultilangString value={dictionary.countryTitles.translations} />
                }
                values={translations}
                isLoading={isFetching}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <NestedListCard
                title={
                  <MultilangString value={dictionary.countryTitles.languages} />
                }
                values={languages}
                isLoading={isFetching}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <NestedListCard
                title={
                  <MultilangString value={dictionary.countryTitles.currencies} />
                }
                values={currencies}
                isLoading={isFetching}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <BasicCard
                title={
                  <MultilangString value={dictionary.countryTitles.otherInfo} />
                }
                values={[
                  getPropertyPair("alpha2Code", alpha2Code),
                  getPropertyPair("alpha3Code", alpha3Code),
                  getPropertyPair("altSpellings", (altSpellings || []).join(", ")),
                  getPropertyPair("latlng", (latlng || []).join("/")),
                  getPropertyPair("borders", (borders || []).join(", ")),
                  getPropertyPair("cioc", cioc),
                  getPropertyPair("gini", gini),
                ]}
                isLoading={isFetching}
              />
            </Grid>
          </>
        )
      ) : (
        <Grid item xs={12} sm={8} md={6} lg={5}>
          <Error
            message={
              <MultilangString value={dictionary.errors.countryInfoIsUnavailable} />
            }
          />
        </Grid>
      )}
    </Grid>
  );
};

export default Content;
