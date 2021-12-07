import measurements from "../../assets/measurements";

const getIncreasedMeasurements = (total, measurement, index, list) => {
  const prevMeasurement = list[index - 1];

  return measurement > prevMeasurement ? ++total : total;
};

const excercise1 = () => {
  return {
    title: "Measurements",
    value: measurements.reduce(getIncreasedMeasurements, 0)
  };
};

export { excercise1 };
