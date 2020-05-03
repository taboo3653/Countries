import React from "react";

import PropTypes from "prop-types";

import Card from "components/Cards/Card";
import PropertyItem from "components/PropertyItem";

const BasicCard = ({ values, ...otherProps }) => {
  return (
    <Card
      value={values.map(([key, value]) => (
        <PropertyItem key={key} title={key} value={value} />
      ))}
      {...otherProps}
    />
  );
};
BasicCard.propTypes = {
  values: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.node))
};

BasicCard.defaultProps = {
  values: []
};
export default BasicCard;
