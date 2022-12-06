import { times, uniq } from 'lodash';
export const parseInput = input => {
  return input.split('');
};

const getMarker = (input, size) => {
  for (let i = 0; i < input.length; i++) {
    const marker = uniq(times(size, j => input[i - j]).filter(Boolean));
    if (marker.length === size) {
      return i + 1;
    }
  }
};

export const partOne = input => {
  const data = parseInput(input);

  return getMarker(data, 4);
};

export const partTwo = input => {
  const data = parseInput(input);
  return getMarker(data, 14);
};
