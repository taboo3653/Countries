import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import PropertyItem from "../PropertyItem";
import NestedList from "../NestedList";
import TextSizeToggler from "../TextSizeToggler";

import { toggleWithValueSidePanel } from "../../redux/actions/ui";
import createLoadingSelector from "../../redux/selectors/loadingSelector";

import MultilangString from "../MultilangString";
import dictionary from "../../utils/dictionary.json";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "300px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(2),
  },
}));

const actions = ["GET_COUNTRY_LIST"];
const loadingSelector = createLoadingSelector(actions);

const SidePanel = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { isOpenSidePanel } = useSelector((state) => state.ui);
  const { countryList } = useSelector((state) => state.countries);

  const isFetching = useSelector((state) => loadingSelector(state));

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    dispatch(toggleWithValueSidePanel(open));
  };

  return (
    <SwipeableDrawer
      anchor="right"
      open={isOpenSidePanel}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <div className={classes.container}>
        <div className={classes.toolbar}>
          <TextSizeToggler />
        </div>
        {!isFetching && (
          <NestedList
            values={[
              [
                <MultilangString value={dictionary.common.listOfCodes} />,
                countryList.map(({ name, alpha3Code }) => (
                  <PropertyItem key={name} title={name} value={alpha3Code} />
                )),
              ],
            ]}
            transition={0}
          />
        )}
      </div>
    </SwipeableDrawer>
  );
};

export default SidePanel;
