import React from "react";
import PropTypes from "prop-types";

import Card from "../Card";
import PropertyItem from "../../PropertyItem";
import NestedList from "../../NestedList";

const NestedListCard = ({ values, ...otherProps }) => {
  return (
    <Card
      value={
        <NestedList
          values={values.map((item) => [
            item.name,
            Object.entries(item)
              .filter(([nestedKey]) => nestedKey !== "name")
              .map(([nestedKey, nestedItem]) => (
                <PropertyItem key={nestedKey} title={nestedKey} value={nestedItem} />
              )),
          ])}
        />
      }
      {...otherProps}
    />
  );
};

NestedListCard.propTypes = {
  values: PropTypes.arrayOf(PropTypes.object),
};

NestedListCard.defaultProps = {
  values: [],
};

export default NestedListCard;
