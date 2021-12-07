import measurements from "../../assets/measurements";

const getIncreasedMeasurements = (total, value, index, list) => {
  if (index >= list.length - 3) {
    return total;
  }

  const groupSum = value + list[index + 1] + list[index + 2];
  const previousSum = (list[index - 1] || 0) + value + list[index + 1];

  return groupSum > previousSum ? ++total : total;
};

const excercise2 = () => {
  return {
    title: "Measurements by group of 3",
    value: measurements.reduce(getIncreasedMeasurements, 0)
  };
};

export { excercise2 };
