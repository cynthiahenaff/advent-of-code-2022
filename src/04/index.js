import { range, difference, intersection } from 'lodash';

export const parseInput = input => {
  return input
    .split('\n')
    .filter(Boolean)
    .map(pair => pair.split(','))
    .map(([first, second]) => {
      const firstElfRange = first.split('-').map(Number);
      const firstElfAssignment = range(firstElfRange[0], firstElfRange[1] + 1);

      const secondElfRange = second.split('-').map(Number);
      const secondElfAssignment = range(
        secondElfRange[0],
        secondElfRange[1] + 1,
      );

      return [firstElfAssignment, secondElfAssignment];
    });
};

export const partOne = input => {
  const data = parseInput(input);
  return data.reduce(
    (pairsCount, [firstElf, secondElf]) =>
      difference(firstElf, secondElf).length === 0 ||
      difference(secondElf, firstElf).length === 0
        ? pairsCount + 1
        : pairsCount,
    0,
  );
};

export const partTwo = input => {
  const data = parseInput(input);
  return data.reduce(
    (pairsCount, [firstElf, secondElf]) =>
      intersection(firstElf, secondElf).length !== 0
        ? pairsCount + 1
        : pairsCount,
    0,
  );
};
