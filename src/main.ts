function sumNumbers(numbers: number[]): number {
  let sum = 0; // Начинаем с нуля
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}
const numbers = [10, 20, 30];
console.log(sumNumbers(numbers));
