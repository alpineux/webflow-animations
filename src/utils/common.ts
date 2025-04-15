export const getVariable = (variableName: string) => {
  return window.getComputedStyle(document.documentElement).getPropertyValue('--' + variableName);
};

export const query = (q: string) => {
  return document.querySelectorAll(q).length > 0;
};
