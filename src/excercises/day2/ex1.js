import diveInstructions from "../../assets/diveInstructions";

const getTotals = (total, instructionSet) => {
  const [instruction, valueStr] = instructionSet.split(" ");
  const value = Number(valueStr);

  switch (instruction) {
    case "forward":
      total.position += value;
      break;
    case "up":
      total.depth -= value;
      break;
    case "down":
      total.depth += value;
      break;
    default:
      break;
  }

  return total;
};

const excercise1 = () => {
  const baseObject = {
    position: 0,
    depth: 0
  };

  const totals = diveInstructions.reduce(getTotals, baseObject);

  return {
    title: "Go Deep",
    value: totals.position * totals.depth
  };
};

export { excercise1 };
