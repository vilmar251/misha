const object1 = { isAdult: true, email: 'example@mail.com', page: 100 };
const object2 = { page: 100, isAdult: true, email: 'example@mail.com' };

const keys1 = Object.keys(object1);
const keys2 = Object.keys(object2);
let areEqual = keys1.length === keys2.length;

if (areEqual) {
    for (const key of keys1) {
        if (object1[key] !== object2[key]) {
            areEqual = false;
            break;
        }
    }
}

console.log(areEqual);
