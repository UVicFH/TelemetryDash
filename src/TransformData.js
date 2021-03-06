const TIMELINE_GRAPH_POINTS = 50;

export const acceptData = (existingData = {}, newData = {}) => {
  const nextData = Object.assign({}, existingData);

  Object.entries(newData).forEach(([key, value]) => {
    const transformInfo = transformationInfo[key]
      ? transformationInfo[key]
      : null;

    const nextKey = transformInfo ? transformInfo.key : key;
    const map = transformInfo ? transformInfo.map : null;

    if (Array.isArray(nextData[nextKey])) {
      nextData[nextKey].unshift({
        val: map ? map(value) : value,
      });

      if (nextData[nextKey].length >= TIMELINE_GRAPH_POINTS) {
        nextData[nextKey].pop();
      }
    } else {
      nextData[nextKey] = {
        val: map ? map(value) : value,
      };
    }
  });

  return nextData;
};

export const graphMap = (data) => {
  return data.map((v, i) => {
    return {
      time: data.length - i,
      value: v.val,
    };
  });
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
  'hybrid/engine/pw': {
    key: 'pw',
    map: roundToNDecimals(1),
  },
  'hybrid/engine/spkadv': {
    key: 'spkadv',
    map: roundToNDecimals(1),
  },
  'hybrid/dash/gear': {
    key: 'gear',
    map: undefined,
  },
  'hybrid/driverinputs/throttle': {
    key: 'throttle',
    map: (val) => (roundToNDecimals(0)(val / 2)),
  },
  'hybrid/driverinputs/brake': {
    key: 'brake',
    map: (val) => (roundToNDecimals(0)(val / 2)),
  },
  'hybrid/dash/speed': {
    key: 'speed',
    map: roundToNDecimals(0),
  },
  'hybrid/dash/rpm': {
    key: 'RPM',
    map: roundToNDecimals(0),
  },
  'hybrid/engine/temperature': {
    key: 'engineTemp',
    map: roundToNDecimals(0),
  },
  'hybrid/engine/MAT': {
    key: 'MAT',
    map: roundToNDecimals(0),
  },
  'hybrid/chassis/FL_brake': {
    key: 'brakeTempLF',
    map: roundToNDecimals(0),
  },
  'hybrid/chassis/FR_brake': {
    key: 'brakeTempRF',
    map: roundToNDecimals(0),
  },
  'hybrid/chassis/RL_brake': {
    key: 'brakeTempLB',
    map: roundToNDecimals(0),
  },
  'hybrid/chassis/RR_brake': {
    key: 'brakeTempRB',
    map: roundToNDecimals(0),
  },
};
