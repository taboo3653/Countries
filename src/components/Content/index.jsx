import React from "react";
import { useSelector } from "react-redux";

import Grid from "@material-ui/core/Grid";

import BasicCard from "../BasicCard";
import NestedListCard from "../NestedListCard";
import ListCard from "../ListCard";

const Content = () => {
  const { currentCountry } = useSelector((state) => state.countries);

  return (
    currentCountry && (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <BasicCard
            title="Basic information"
            values={{
              Capital: currentCountry.capital,
              Region: currentCountry.region,
              Subregion: currentCountry.subregion,
              Population: currentCountry.population,
              Area: currentCountry.area,
              Demonym: currentCountry.demonym,
              "Native name": currentCountry.nativeName,
              "Top level domains": currentCountry.topLevelDomain.join(", "),
              "Time zones": currentCountry.timezones.join(", "),
              "Calling codes": currentCountry.callingCodes
                .map((code) => `+${code}`)
                .join(", "),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ListCard title="Translations" values={currentCountry.translations} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <NestedListCard title="Languages" values={currentCountry.languages} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <NestedListCard
            title="Currencies"
            values={currentCountry.currencies}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <BasicCard
            title="Other information"
            values={{
              "2-lettel code": currentCountry.alpha2Code,
              "3-lettel code": currentCountry.alpha3Code,
              "Alternative spellings": currentCountry.altSpellings.join(", "),
              "Latitude/Longitude": currentCountry.latlng.join("/"),
              Borders: currentCountry.borders.join(", "),
              "Numeric code": currentCountry.numericCode,
              Cioc: currentCountry.cioc,
              Gini: currentCountry.gini,
            }}
          />
        </Grid>
      </Grid>
    )
  );
};

export default Content;
