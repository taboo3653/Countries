import React from "react";

import CardMedia from "@material-ui/core/CardMedia";

import Card from "../Card";

const MainCard = ({ title = "", imageUrl = "", ...otherProps }) => {
  return (
    <Card
      title={title}
      value={
        <CardMedia component="img" alt={title} image={imageUrl} title={title} />
      }
      {...otherProps}
    />
  );
};

export default MainCard;
