import { round } from 'lodash';

export const parseInput = input => {
  return input
    .split('\n')
    .filter(Boolean)
    .map(round => round.split(' '));
};

export const partOne = input => {
  const data = parseInput(input);

  return data.reduce((points, [opponent, me]) => {
    let roundPoints = 0;

    if (me === 'X') {
      roundPoints += 1;
      roundPoints += opponent === 'C' ? 6 : opponent === 'A' ? 3 : 0;
    } else if (me === 'Y') {
      roundPoints += 2;
      roundPoints += opponent === 'A' ? 6 : opponent === 'B' ? 3 : 0;
    } else {
      roundPoints += 3;
      roundPoints += opponent === 'B' ? 6 : opponent === 'C' ? 3 : 0;
    }

    return points + roundPoints;
  }, 0);
};

export const partTwo = input => {
  const data = parseInput(input);

  return data.reduce((points, [opponent, need]) => {
    let roundPoints = 0;

    if (need === 'X') {
      roundPoints += 0;
      roundPoints += opponent === 'A' ? 3 : opponent === 'C' ? 2 : 1;
    } else if (need === 'Y') {
      roundPoints += 3;
      roundPoints += opponent === 'C' ? 3 : opponent === 'B' ? 2 : 1;
    } else {
      roundPoints += 6;
      roundPoints += opponent === 'B' ? 3 : opponent === 'A' ? 2 : 1;
    }

    return points + roundPoints;
  }, 0);
};
