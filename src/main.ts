const alice = {
  name: 'Alice',
  age: 10,
  illness: null,
  driverLicenses: ['B'],
};

const bob = {
  name: 'Bob',
  age: 18,
  illness: 'Cold',
  driverLicenses: ['B'],
};

const charlie = {
  name: 'Charlie',
  age: 17,
  illness: null,
  driverLicenses: ['C', 'E'],
};

const diana = {
  name: 'Diana',
  age: 22,
  illness: 'H. Disease',
  driverLicenses: ['A', 'C', 'D'],
};

const eve = {
  name: 'Eve',
  age: 35,
  illness: null,
  driverLicenses: ['A', 'B', 'E'],
};

const frank = {
  name: 'Frank',
  age: 37,
  illness: null,
  driverLicenses: [],
};

const gorge = {
  name: 'Gorge',
  age: 28,
  illness: null,
  driverLicenses: ['B', 'D'],
};

const persons = [alice, bob, charlie, diana, eve, frank, gorge];

const invalidPersons: any = [];
const validPersons: any = [];
persons.forEach((person) => {
  if (person.age < 18) {
    invalidPersons.push({ ...person, reason: 'Молодой' });
    return;
  }

  if (person.illness) {
    invalidPersons.push({ ...person, reason: 'Болен' });
    return;
  }

  if (!person.driverLicenses.includes('B')) {
    invalidPersons.push({ ...person, reason: 'Нет прав' });
    return;
  }

  validPersons.push(person);
});

console.log('Для трюка подходят:', validPersons);
console.log('\nДля трюка НЕ подходят:', invalidPersons);
