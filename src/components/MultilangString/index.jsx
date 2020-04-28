import { useSelector } from "react-redux";
import { EN } from "../../constants/languages";

const MultilangString = ({ value }) => {
  const { language } = useSelector((state) => state.system);

  const result = value[language];
  return result || value[EN];
};

export default MultilangString;
