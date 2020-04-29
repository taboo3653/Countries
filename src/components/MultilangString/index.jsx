import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { EN } from "constants/languages";

const MultilangString = ({ value }) => {
  const { language } = useSelector((state) => state.system);

  const result = value[language];
  return result || value[EN];
};

MultilangString.propTypes = {
  value: PropTypes.shape({
    en: PropTypes.string
  })
};

MultilangString.defaultProps = {
  value: { en: "" }
};

export default MultilangString;
