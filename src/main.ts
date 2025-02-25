const storage = [
  { age: 10, name: 'first' },
  { age: 20, name: 'second' },
  { age: 30, name: 'third' },
  { age: 40, name: 'fourth' },
];

const storage2 = storage.map((item) => ({
  age: item.name,
  name: item.age,
  reversed: true,
}));

console.log(storage2);
