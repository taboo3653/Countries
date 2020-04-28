export const toggleWithValueSidePanel = (value) =>
  value
    ? {
        type: "OPEN_SIDE_PANEL",
      }
    : {
        type: "CLOSE_SIDE_PANEL",
      };

export const toggleSidePanel = () => ({
  type: "TOGGLE_SIDE_PANEL",
});
