export const getStored = (key, fallback = null) => {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch {
    return fallback;
  }
};
export const setStored = (key, value) => localStorage.setItem(key, JSON.stringify(value));
export const removeStored = (key) => localStorage.removeItem(key);
export const getRaw = (key, fallback = "") => localStorage.getItem(key) ?? fallback;
export const setRaw = (key, value) => localStorage.setItem(key, value);