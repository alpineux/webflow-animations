export const getVariable = (variableName: string) => {
  return window.getComputedStyle(document.body).getPropertyValue(variableName);
};

export const query = (q: string) => {
  return document.querySelectorAll(q).length > 0;
};
