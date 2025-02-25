type GradeCount = {
  count: number;
  sum: number;
};

const values: [number, number][] = [
  [1, 100],
  [2, 200],
  [3, 300],
  [1, 2],
  [3, 400],
  [4, 500],
  [1, 99],
];

const result = values.reduce<Record<number, GradeCount>>((acc, [grade, count]) => {
  if (!acc[grade]) {
    acc[grade] = { count: 0, sum: 0 };
  }
  acc[grade].count += 1;
  acc[grade].sum += count;
  return acc;
}, {});

console.log(result);
