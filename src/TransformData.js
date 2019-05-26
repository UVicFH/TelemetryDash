export const acceptData = (existingData = {}, newData = {}) => {
  const nextData = Object.assign({}, existingData);

  Object.entries(newData).forEach(([key, value]) => {
    const transformInfo = transformationInfo[key]
      ? transformationInfo[key]
      : null;

    const nextKey = transformInfo ? transformInfo.key : key;
    const map = transformInfo ? transformInfo.map : null;

    if (Array.isArray(nextData[nextKey])) {
      nextData[nextKey].push({
        val: map ? map(value) : value,
      });
    } else {
      nextData[nextKey] = [{
        val: map ? map(value) : value,
      }];
    }
  });

  return nextData;
};

const roundToNDecimals = (n) => {
  return (val) => {
    const d = Math.pow(10, n);
    return Math.round(val * d) / d;
  };
};

const transformationInfo = {
  'hybrid/engine/AFR': {
    key: 'AFR',
    map: roundToNDecimals(1),
  },
  'hybrid/engine/TPS': {
    key: 'TPS',
    map: roundToNDecimals(0),
  },
  'hybrid/dash/charge': {
    key: 'charge',
    map: roundToNDecimals(0),
  },
  'hybrid/dash/fuel': {
    key: 'fuel',
    map: roundToNDecimals(0),
  },
};
