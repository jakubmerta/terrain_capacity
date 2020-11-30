const getReverseArray = (array, index) => {
  if (!index) return [];
  const reducedList = array.slice(0, index - 1 || 1);
  const reversedList = reducedList.reverse();
  return reversedList;
};
const getPrevNumber = (value, array, index) => {
  const reversedList = getReverseArray(array, index);
  const prevNumber =
    reversedList.find((element) => element >= value) || array[index - 1] || 0;
  return prevNumber;
};
const getPrevHighestPoint = (value, prevPoint) => {
  const point = value >= prevPoint ? value : prevPoint;
  return point;
};

const getNextPoint = (array, index) => {
  const reducedList = array.slice(index + 1);
  const nextPoint = Math.max(...reducedList);
  return nextPoint;
};
const getLowestHightPoint = (value, array, index, nextPoint) => {
  const prevNumber = getPrevNumber(value, array, index);
  const prevHighestPoint = getPrevHighestPoint(value, prevNumber);
  const lowestHightPoint =
    prevHighestPoint < nextPoint ? prevHighestPoint : nextPoint;
  return lowestHightPoint;
};

const reduceCapacity = (total, value, index, array) => {
  if (
    !total.nextPoint ||
    total.nextPoint === value ||
    total.lowestHightPoint <= value
  ) {
    total.nextPoint = getNextPoint(array, index);
    total.lowestHightPoint = getLowestHightPoint(
      value,
      array,
      index,
      total.nextPoint
    );
  }
  const result =
    value >= total.lowestHightPoint ? 0 : total.lowestHightPoint - value;
  total.capacityList.push(result);
  return total;
};

const getCapacity = (array) => {
  const initialValue = {
    capacityList: [],
    nextPoint: 0,
    lowestHightPoint: 0
  };
  const { capacityList } = array.reduce(reduceCapacity, initialValue);
  return capacityList;
};

const reduceSum = (total, value) => {
  const result = total + value;
  return result;
};

const getSum = (array) => {
  const sum = array.reduce(reduceSum, 0);
  return sum;
};

const everyIsInteger = (value) => Number.isInteger(value);

export const getCapacitySum = (array) => {
  if (!Array.isArray(array) || !array.every(everyIsInteger)) return 0;
  const capacityList = getCapacity(array);
  const sumCapacity = getSum(capacityList);
  return sumCapacity;
};
