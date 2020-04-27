import React from "react";

import Card from "../Card";
import PropertyItem from "../PropertyItem";

const ListCard = ({ title = "", values = {} }) => {
  return (
    <Card
      title={title}
      value={Object.entries(values).map(([key, value]) => (
        <PropertyItem key={key} title={key} value={value} />
      ))}
    />
  );
};

export default ListCard;
