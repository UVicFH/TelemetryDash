export const acceptData = (existingData = {}, newData = {}) => {
  const nextData = Object.assign({}, existingData);
  Object.entries(newData).forEach(([key, value]) => {
    if (key == 'hybrid/engine/AFR') {
      if (Array.isArray(nextData[key])) {
        nextData['AFR'].push({val: value});
      } else {
        nextData['AFR'] = [{val: value}];
      }
    } else {
      if (Array.isArray(nextData[key])) {
        nextData[key].push(value);
      } else {
        nextData[key] = [value];
      }
    }
  });
  return nextData;
};
