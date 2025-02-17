import { faker } from '@faker-js/faker';

function findStasAge(people: { name: string; age?: number | null }[]): string {
  for (const person of people) {
    if (person.name === 'Stas') {
      if (person.age == null) return 'Возрастa нет';
      return String(person.age);
    }
  }
  return 'Объект не найден';
}
const testData = [
  { name: 'Alex', age: 18 },
  { name: 'Maria', age: 20 },
  { name: 'Stas', age: faker.helpers.maybe(() => faker.number.int({ min: 18, max: 60 })) },
  { name: 'Ivan', age: 10 },
];
console.log(findStasAge(testData));
