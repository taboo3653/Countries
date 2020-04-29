import React from "react";
import PropTypes from "prop-types";

import CardMedia from "@material-ui/core/CardMedia";

import Card from "../Card";

const MainCard = ({ title, imageUrl, ...otherProps }) => {
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

MainCard.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
};

MainCard.defaultProps = {
  title: "",
  imageUrl: "",
};

export default MainCard;
