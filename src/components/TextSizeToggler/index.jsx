import React from "react";
import { useSelector, useDispatch } from "react-redux";

import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import TextFieldsIcon from "@material-ui/icons/TextFields";

import { setTextSize } from "mRedux/actions/system";

import { MD, LG, XL } from "constants/textSize";

const TextSizeToggler = () => {
  const dispatch = useDispatch();

  const { textSize } = useSelector((state) => state.system);

  const handleTextSize = (event, txtSize) => {
    if (txtSize !== null) dispatch(setTextSize(txtSize));
  };

  return (
    <ToggleButtonGroup
      size="small"
      value={textSize}
      exclusive
      onChange={handleTextSize}
      aria-label="set text size"
    >
      <ToggleButton value={MD} aria-label={MD}>
        <TextFieldsIcon style={{ fontSize: 18 }} />
      </ToggleButton>
      <ToggleButton value={LG} aria-label={LG}>
        <TextFieldsIcon style={{ fontSize: 24 }} />
      </ToggleButton>
      <ToggleButton value={XL} aria-label={XL}>
        <TextFieldsIcon style={{ fontSize: 30 }} />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default TextSizeToggler;
