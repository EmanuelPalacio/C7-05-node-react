export const getLocalStorage = <T>(key: string): T | null => {
  return JSON.parse(window.localStorage.getItem(key)!);
};
export const setLocalStorage = <T>(key: string, data: T) => {
  return window.localStorage.setItem(key, JSON.stringify(data));
};
export const clearLocalStorage = () => {
  window.localStorage.clear();
};
