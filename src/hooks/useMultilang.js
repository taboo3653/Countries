import { useSelector } from "react-redux";

import { EN } from "constants/languages";

const useMultilang = () => {
  const { language } = useSelector((state) => state.system);

  return (value) => {
    const result = value[language];
    return result || value[EN];
  };
};

export default useMultilang;
