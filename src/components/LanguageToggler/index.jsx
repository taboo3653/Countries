import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

import { setLanguage } from "../../redux/actions/system";

import { EN, RU } from "../../constants/languages";

const LanguageToggler = () => {
  const dispatch = useDispatch();

  const { language } = useSelector((state) => state.system);

  const handleLanguage = (event, lang) => {
    if (lang !== null) dispatch(setLanguage(lang));
  };

  return (
    <ToggleButtonGroup
      size="small"
      value={language}
      exclusive
      onChange={handleLanguage}
      aria-label="set language"
    >
      <ToggleButton value={EN} aria-label={EN}>
        {EN}
      </ToggleButton>
      <ToggleButton value={RU} aria-label={RU}>
        {RU}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default LanguageToggler;
