export const parseInput = input => {
  return input
    .split('\n\n')
    .map(elf => elf.split('\n').filter(Boolean).map(Number));
};

export const partOne = input => {
  const data = parseInput(input);
  const caloriesByElf = data.map(calories =>
    calories.reduce((a, b) => a + b, 0),
  );

  return Math.max(...caloriesByElf);
};

export const partTwo = input => {
  const data = parseInput(input);
  const topThreeCaloriesByElf = data
    .map(calories => calories.reduce((a, b) => a + b, 0))
    .sort((a, b) => b - a)
    .slice(0, 3);

  return topThreeCaloriesByElf.reduce((a, b) => a + b, 0);
};
