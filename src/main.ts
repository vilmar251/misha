type User = { name?: string | null };
const users: User[] = [{}, { name: null }, { name: '' }, { name: 'Алексей' }];

const user1 = users[0].name ?? 'не обнаружено';
const result1 = user1 || 'пусто';
console.log(result1);

const user2 = users[1].name ?? 'не обнаружено';
const result2 = user2 || 'пусто';
console.log(result2);

const user3 = users[2].name ?? 'не обнаружено';
const result3 = user3 || 'пусто';
console.log(result3);

const user4 = users[3].name ?? 'не обнаружено';
const result4 = user4 || 'пусто';
console.log(result4);
