import React, { useState } from "react";

import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import Card from "../Card";
import PropertyItem from "../PropertyItem";

const NestedListCard = ({ title = "", values = [] }) => {
  const [open, setOpen] = useState({});

  const handleClick = (id) => {
    setOpen({ ...open, [id]: !open[id] });
  };

  return (
    <Card
      title={title}
      value={
        <List disablePadding>
          {values.map((item, key) => {
            return (
              <>
                <ListItem
                  button
                  component="li"
                  key={item.name}
                  onClick={() => handleClick(item.name)}
                >
                  <ListItemText primary={item.name} />
                  {open[item] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open[item.name]} timeout="auto" unmountOnExit>
                  {Object.entries(item)
                    .filter(([nestedKey]) => nestedKey !== "name")
                    .map(([nestedKey, nestedItem]) => (
                      <PropertyItem
                        key={nestedKey}
                        title={nestedKey}
                        value={nestedItem}
                      />
                    ))}
                </Collapse>
              </>
            );
          })}
        </List>
      }
    />
  );
};

export default NestedListCard;
