const filterPositiveNumbers = (arr: (number | string | boolean)[]): number[] =>
  arr.reduce((acc: number[], num) => {
    if (typeof num === 'number' && num > 0) acc.push(num);
    return acc;
  }, []);

const filterStrings = (arr: (number | string | boolean)[]): string[] =>
  arr.reduce((acc: string[], item) => {
    if (typeof item === 'string') acc.push(item);
    return acc;
  }, []);

const uniqueValues = (arr: (number | string | boolean)[]): (number | string | boolean)[] =>
  arr.reduce((acc: (number | string | boolean)[], item) => {
    if (!acc.includes(item)) acc.push(item);
    return acc;
  }, []);

const reverseArray = (arr: (number | string | boolean)[]): (number | string | boolean)[] =>
  arr.reduce((acc: (number | string | boolean)[], item) => [item, ...acc], []);

const values: (number | string | boolean)[] = [10, 'just_name', true, 10, 'just_name', false];

console.log(filterPositiveNumbers(values));
console.log(filterStrings(values));
console.log(uniqueValues(values));
console.log(reverseArray(values));
