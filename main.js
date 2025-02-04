const user = {
    example: [1, 2, 3],
    'X-Address': {
        street: 'Ленина',
        house: '10-Б',
    },
    nickname: null,
    permissions: [true, false],
    age: 101,
    emails: ['alice@example.com', 'bob@example.com', 'charlie@example.com', 'peter@example.com'],
    name: 'Peter Charles',
    isAdult: true,
    now: new Date().toISOString(),
};

let maxLength = null;
let result = null;

for (const key in user) {
    if (Array.isArray(user[key]) && user[key].length > maxLength) {
        maxLength = user[key].length;
        result = user[key];
    }
}

console.log(`Максимальная длина: ${maxLength}. Последнее значение: ${result[maxLength-1]}`);
