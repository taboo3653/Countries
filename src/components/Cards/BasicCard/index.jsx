import React from "react";

import { uid } from "react-uid";

import Card from "../Card";
import PropertyItem from "../../PropertyItem";

const BasicCard = ({ values = [], ...otherProps }) => {
  return (
    <Card
      value={values.map(([key, value]) => (
        <PropertyItem key={uid(key)} title={key} value={value} />
      ))}
      {...otherProps}
    />
  );
};

export default BasicCard;
