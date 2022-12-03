import { intersection, flatten } from 'lodash';

export const parseInput = input => {
  return input.split('\n').filter(Boolean);
};

const itemTypes = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

export const partOne = input => {
  const data = parseInput(input).map(ruckStack => {
    const half = ruckStack.length / 2;
    return [
      ruckStack.slice(0, half).split(''),
      ruckStack.slice(half, ruckStack.length).split(''),
    ];
  });

  return data.reduce((sum, [first, second]) => {
    const item = intersection(first, second);
    return sum + itemTypes.indexOf(...item) + 1;
  }, 0);
};

export const partTwo = input => {
  const data = parseInput(input);
  const groupedData = data.reduce((acc, current, index) => {
    if (index % 3) {
      acc[acc.length - 1].push(current);
    } else {
      acc.push([current]);
    }
    return acc;
  }, []);

  return groupedData.reduce((sum, [first, second, third]) => {
    const item = intersection(
      first.split(''),
      second.split(''),
      third.split(''),
    );
    return sum + itemTypes.indexOf(...item) + 1;
  }, 0);
};
