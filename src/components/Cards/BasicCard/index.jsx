import React from "react";

import PropTypes from "prop-types";
import { uid } from "react-uid";

import Card from "../Card";
import PropertyItem from "../../PropertyItem";

const BasicCard = ({ values, ...otherProps }) => {
  return (
    <Card
      value={values.map(([key, value]) => (
        <PropertyItem key={uid(key)} title={key} value={value} />
      ))}
      {...otherProps}
    />
  );
};
BasicCard.propTypes = {
  values: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.node)),
};

BasicCard.defaultProps = {
  values: [],
};
export default BasicCard;
