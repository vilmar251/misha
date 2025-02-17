function numb(num: number): number {
  for (let i = Math.floor(num / 2); i >= 1; i--) {
    if (num % i === 0) return i;
  }
  return 1;
}
const numbers = [1, 10, 11, 12, 21, 61, 85, 123];
numbers.forEach((num) => console.log(`${num} - ${numb(num)}`));
