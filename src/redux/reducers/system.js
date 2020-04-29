import { EN } from "../../constants/languages";
import { MD } from "../../constants/textSize";

const initialState = {
  language: localStorage.getItem("language") || EN,
  textSize: localStorage.getItem("textSize") || MD,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      return {
        ...state,
        language: action.payload,
      };
    case "SET_TEXT_SIZE":
      return {
        ...state,
        textSize: action.payload,
      };

    default:
      return state;
  }
};
