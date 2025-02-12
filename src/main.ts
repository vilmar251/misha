// 1. 2024-08-23T03:30:00-11:00
// 2. 2024-08-23T15:30:00+03:00
// 3. 2024-08-23T14:30:00Z
// 4. 2024-08-23T15:30:00Z
// 5. 2024-08-24T01:30:00+13:00
// 6. 2024-08-23T17:30:00+02:00
// 7. 2024-08-23T10:30:00-04:00
// 8. 2024-08-23T03:30:00-12:00
// 9. 2024-08-23T09:30:00-03:00
// 10. 2024-08-23T14:30:00-01:00
// 11. 2024-08-24T02:30:00+12:00
// 12. 2024-08-23T12:30:00Z
import dayjs from 'dayjs';
// группа 1
const time1 = '2024-08-23T12:30:00Z';
const time2 = '2024-08-23T15:30:00+03:00';
const time3 = '2024-08-23T09:30:00-03:00';
const time4 = '2024-08-24T01:30:00+13:00';

console.log(dayjs(time1).toISOString());
console.log(dayjs(time2).toISOString());
console.log(dayjs(time3).toISOString());
console.log(dayjs(time4).toISOString());
console.log('----------------------------');
// группа 2
const time5 = '2024-08-23T15:30:00Z';
const time6 = '2024-08-23T17:30:00+02:00';
const time7 = '2024-08-23T14:30:00-01:00';
const time8 = '2024-08-23T03:30:00-12:00';

console.log(dayjs(time5).toISOString());
console.log(dayjs(time6).toISOString());
console.log(dayjs(time7).toISOString());
console.log(dayjs(time8).toISOString());
console.log('----------------------------');
// группа 3
const time9 = '2024-08-23T14:30:00Z';
const time10 = '2024-08-23T10:30:00-04:00';
const time11 = '2024-08-23T03:30:00-11:00';
const time12 = '2024-08-24T02:30:00+12:00';

console.log(dayjs(time9).toISOString());
console.log(dayjs(time10).toISOString());
console.log(dayjs(time11).toISOString());
console.log(dayjs(time12).toISOString());
