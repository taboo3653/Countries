export const setLanguage = (language) => {
  localStorage.setItem("language", language);

  return {
    type: "SET_LANGUAGE",
    payload: language,
  };
};
