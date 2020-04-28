import React from "react";

import Card from "../Card";
import PropertyItem from "../../PropertyItem";

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

export default ListCard;
