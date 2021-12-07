import diveInstructions from "../../assets/diveInstructions";

const getTotals = (total, instructionSet) => {
  const [instruction, valueStr] = instructionSet.split(" ");
  const value = Number(valueStr);

  switch (instruction) {
    case "forward":
      total.position += value;
      total.depth += total.aim * value;
      break;
    case "up":
      total.aim -= value;
      break;
    case "down":
      total.aim += value;
      break;
    default:
      break;
  }

  return total;
};

const excercise2 = () => {
  const baseObject = {
    position: 0,
    depth: 0,
    aim: 0
  };

  const totals = diveInstructions.reduce(getTotals, baseObject);

  return {
    title: "Go Deep with aim",
    value: totals.position * totals.depth
  };
};

export { excercise2 };
