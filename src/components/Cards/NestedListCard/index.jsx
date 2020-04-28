import React from "react";

import Card from "../Card";
import PropertyItem from "../../PropertyItem";
import NestedList from "../../NestedList";

const NestedListCard = ({ values = [], ...otherProps }) => {
  return (
    <Card
      value={
        <NestedList
          values={values.map((item) => [
            item.name,
            Object.entries(item)
              .filter(([nestedKey]) => nestedKey !== "name")
              .map(([nestedKey, nestedItem]) => (
                <PropertyItem
                  key={nestedKey}
                  title={nestedKey}
                  value={nestedItem}
                />
              )),
          ])}
        />
      }
      {...otherProps}
    />
  );
};

export default NestedListCard;
