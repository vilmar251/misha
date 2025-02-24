const storage = [
  'nick',
  'nack',
  'nock',
  [
    {
      first: 'forecast',
      child: null,
    },
    {
      first: 'castfore',
      child: null,
    },
    'zzz',
  ],
  'no-1',
  'no-2',
];

const [, , , [, b1, ...cos], ...nos] = storage;

console.log(nos); // [ 'no-1', 'no-2' ]
console.log(cos); // [ 'zzz' ]
console.log(b1); // { first: 'castfore', child: null }
