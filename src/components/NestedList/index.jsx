import React, { useState } from "react";
import PropTypes from "prop-types";

import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const NestedList = ({ values, transition }) => {
  const [open, setOpen] = useState({});
  const handleClick = (id) => {
    setOpen({ ...open, [id]: !open[id] });
  };

  return (
    <List disablePadding>
      {values.map(([title, value]) => (
        <div key={title}>
          <ListItem button component="li" onClick={() => handleClick(title)}>
            <ListItemText primary={title} />
            {open[title] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open[title]} timeout={transition} unmountOnExit>
            {value}
          </Collapse>
        </div>
      ))}
    </List>
  );
};

NestedList.propTypes = {
  transition: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  values: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.node)),
};

NestedList.defaultProps = {
  transition: "auto",
  values: [],
};

export default NestedList;
