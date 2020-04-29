export const setLanguage = (language) => {
  localStorage.setItem("language", language);

  return {
    type: "SET_LANGUAGE",
    payload: language,
  };
};

export const setTextSize = (textSize) => {
  localStorage.setItem("textSize", textSize);

  return {
    type: "SET_TEXT_SIZE",
    payload: textSize,
  };
};
