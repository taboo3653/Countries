import React from "react";
import PropTypes from "prop-types";

import Card from "components/Cards/Card";
import PropertyItem from "components/PropertyItem";

const ListCard = ({ values = {}, ...otherProps }) => {
  return (
    <Card
      value={Object.entries(values).map(([key, value]) => (
        <PropertyItem key={key} title={key} value={value} />
      ))}
      {...otherProps}
    />
  );
};

ListCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  values: PropTypes.object
};

ListCard.defaultProps = {
  values: {}
};

export default ListCard;
