import React from "react";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Skeleton from "@material-ui/lab/Skeleton";

import { useDispatch, useSelector } from "react-redux";

import matchSorter from "match-sorter";

import { fetchCountryByCode } from "../../redux/actions/countries";
import createLoadingSelector from "../../redux/selectors/loadingSelector";

const actions = ["GET_COUNTRY_LIST"];
const loadingSelector = createLoadingSelector(actions);

const Input = () => {
  const dispatch = useDispatch();

  const isFetching = useSelector((state) => loadingSelector(state));

  const { countryList } = useSelector((state) => state.countries);

  const filterOptions = (options, { inputValue }) =>
    matchSorter(options, inputValue, {
      keys: [
        { threshold: matchSorter.rankings.CONTAINS, key: "name" },
        "alpha3Code",
        (item) => item.currencies.map((i) => i.code),
      ],
    });

  const handleSelect = (countryObject) => {
    dispatch(fetchCountryByCode(countryObject.alpha3Code));
  };

  return !isFetching ? (
    <Autocomplete
      id="main-input"
      fullWidth
      options={countryList}
      getOptionLabel={(option) => option.name}
      filterOptions={filterOptions}
      onChange={(e, value, reason) => {
        if (reason === "select-option") handleSelect(value);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Please enter country name, code or currency"
          variant="outlined"
          autoFocus
        />
      )}
    />
  ) : (
    <Skeleton variant="rect" style={{ height: "56px" }} />
  );
};

export default Input;
