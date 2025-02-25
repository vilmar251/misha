type User = { id: number; age: number; name: string };

const sort = (array: User[], key: keyof User, direction: 'asc' | 'desc' = 'asc'): User[] => {
  return [...array].sort((a, b) => {
    if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
    if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
    return 0;
  });
};

const users: User[] = [
  { id: 1, age: 10, name: 'zxc' },
  { id: 3, age: 20, name: 'juk' },
  { id: 6, age: 2, name: 'aa' },
  { id: 9, age: 1, name: 'ab' },
  { id: 2, age: 5, name: 'zz' },
];

const sortedByIdAsc = sort(users, 'id');
console.log(sortedByIdAsc);

const sortedByNameDesc = sort(users, 'name', 'desc');
console.log(sortedByNameDesc);

const sortedByAgeDesc = sort(users, 'age', 'desc');
console.log(sortedByAgeDesc);

console.log(users);
