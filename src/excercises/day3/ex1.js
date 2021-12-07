import binaryDiagnostic from "../../assets/binaryDiagnostic";

const getTotalOfOnes = (total, diagnosticCode) => {
  const codeToArray = String(diagnosticCode).split("");

  return total.map((item, index) => {
    return item + Number(codeToArray[index]);
  });
};

const excercise1 = () => {
  const baseArray = binaryDiagnostic[0].split("").fill(0);
  const diagnosticsLength = binaryDiagnostic.length;

  const totalOnes = binaryDiagnostic.reduce(getTotalOfOnes, baseArray);
  const gammaRate = totalOnes.reduce((finalBinary, commonValue) => {
    return finalBinary + Number(Boolean(commonValue > diagnosticsLength / 2));
  }, "");
  const epsilonRate = gammaRate
    .split("")
    .map((value) => Number(!Number(value)))
    .join("");

  const gammaRateDecimal = parseInt(gammaRate, 2);
  const epsilonRateDecimal = parseInt(epsilonRate, 2);

  return {
    title: "Power consumption",
    value: gammaRateDecimal * epsilonRateDecimal
  };
};

export { excercise1 };
