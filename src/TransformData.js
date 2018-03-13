export const acceptData = (existingData, newData) => {
  const nextData = Object.assign({}, existingData);
  for (let type in newData) {
    existingData[type].append(newData[type]);
  }
  return nextData;
};
