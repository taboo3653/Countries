const hoursToMs = (hours) => hours * 1000 * 3600;
const cacheMap = new Map();

export const getItem = (key) => {
  const payload = cacheMap.get(key);

  if (!payload) return undefined;
  if (payload.validTill < Date.now()) {
    cacheMap.delete(key);
    return undefined;
  }

  return payload.value;
};

export const setItem = (key, value, validHours) => {
  const payload = {
    value,
    validTill: Date.now() + hoursToMs(validHours),
  };

  cacheMap.set(key, payload);
};

export const removeItem = (key) => {
  cacheMap.delete(key);
};
