export const sessionStorage = {
  get: (key: string) => {
    return window.sessionStorage.getItem(key);
  },
  set: (key: string, value: string) => {
    window.sessionStorage.setItem(key, value);
  },
  remove: (key: string) => {
    window.sessionStorage.removeItem(key);
  },
  clear: () => {
    window.sessionStorage.clear();
  },
};
