export const acceptData = (existingData = {}, newData = {}) => {
  const nextData = Object.assign({}, existingData);
  Object.entries(newData).forEach(([key, value]) => {
    if (Array.isArray(nextData[key])) nextData[key].push(value);
    else nextData[key] = [value];
  });
  return nextData;
};
