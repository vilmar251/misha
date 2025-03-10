const compareObjectsRecursive = (obj1: any, obj2: any): boolean => {
  if (obj1 === obj2) return true;
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
    return false;
  }
  if (Array.isArray(obj1) !== Array.isArray(obj2)) return false;
  if (Array.isArray(obj1)) {
    if (obj1.length !== obj2.length) return false;
    for (let i = 0; i < obj1.length; i++) {
      if (!compareObjectsRecursive(obj1[i], obj2[i])) return false;
    }
    return true;
  }
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  if (!keys1.every((key) => keys2.includes(key))) return false;
  for (const key of keys1) {
    if (!compareObjectsRecursive(obj1[key], obj2[key])) return false;
  }
  return true;
};

const object1 = { a: 10, b: { c: { d: { e: [1, true, { g: { a: [1] } }] } } } };

const testCases: [any, any, boolean][] = [
  [1, 0, false],
  [false, false, true],
  [1, true, false],
  [null, null, true],
  [undefined, undefined, true],
  [undefined, null, false],
  ['', '', true],
  ['abc', 'ABC', false],
  [[1, 2, 3], [1, 2, 3], true],
  [[3, 2, 1], [1, 2, 3], false],
  [[], [], true],
  [[[[1, [2, [3]]]]], [[[1, [2, [3]]]]], true],
  [[[[false, [], [], [[[true]]]]]], [[[false, [], [], [[[true]]]]]], true],
  [[], [undefined], false],
  [{}, {}, true],
  [{ a: 10, b: '' }, { a: 10, b: '' }, true],
  [{ a: [2, 1] }, { a: [1, 2] }, false],
  [object1, object1, true],
  [{ x: [{ x: [{ x: [{ x: 'X' }] }] }] }, { x: [{ x: [{ x: [{ x: 'X' }] }] }] }, true],
  [{ x: [{ x: [{ x: [{ x: 'X' }] }] }] }, { x: [{ x: [{ x: [{ x: 'x' }] }] }] }, false],
];

for (const test of testCases) {
  const [obj1, obj2, expected] = test;
  const result = compareObjectsRecursive(obj1, obj2);

  const words = [
    result === expected ? `Корректно (${result})` : `ОШИБКА - (Ожидалось ${expected}, фактически - ${result})`,
    '-',
    JSON.stringify(obj1),
    '|',
    JSON.stringify(obj2),
  ];

  console.log(words.join('\t'));
}
