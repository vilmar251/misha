import { green, red } from 'chalk';

type Product = {
  id: string;
  name: string;
  price: number;
};

type OrderItem<T> = {
  count: number;
  data: T;
};

type Order = {
  id: string;
  date: Date;
  items: OrderItem<Product>[] | null;
};

type Processed<T> = {
  processed: boolean;
  sum: number;
  countUniqueItems: number | null;
  countTotalItems: number | null;
  order: T;
};

const processOrder = (order: Order): Processed<Order> => {
  if (!order.items) {
    return {
      processed: true,
      sum: 0,
      countUniqueItems: null,
      countTotalItems: null,
      order,
    };
  }

  const sum = order.items.reduce((total, item) => total + item.count * item.data.price, 0);
  const countTotalItems = order.items.reduce((total, item) => total + item.count, 0);
  const countUniqueItems = order.items.length;

  return {
    processed: true,
    sum,
    countUniqueItems,
    countTotalItems,
    order,
  };
};

const order1: Order = {
  id: 'egKAa',
  date: new Date(),
  items: [
    { count: 20, data: { id: 'myDwb', name: 'Hand cream', price: 13.5 } },
    {
      count: 5,
      data: { id: 'Fxfig', name: 'Smart Home Security System', price: 29 },
    },
  ],
};

const order2: Order = {
  id: 'GP0fh',
  date: new Date(),
  items: [
    {
      count: 4,
      data: { id: 'uXdFA', name: 'Ergonomic Office Chair', price: 14 },
    },
    {
      count: 100.01,
      data: { id: '6Rn18', name: 'Organic Coffee Beans', price: 100.3 },
    },
    { count: 500, data: { id: 'tZL6b', name: 'Artisan Bread Loaf', price: 0 } },
  ],
};

const order3: Order = {
  id: '0ifUx',
  date: new Date(),
  items: [
    {
      count: 7,
      data: { id: 'PQwfm', name: 'Organic Cotton T-Shirt', price: 15 },
    },
    {
      count: 0,
      data: { id: '8VEB1', name: 'Bamboo Cutting Board', price: 125 },
    },
  ],
};

const order4: Order = {
  id: 'fMUu8',
  date: new Date(),
  items: [
    {
      count: 25.2,
      data: { id: 'iscki', name: 'Gourmet Chocolate Truffles', price: 13.3 },
    },
  ],
};

const order5: Order = {
  id: 'bBzcy',
  date: new Date(),
  items: [],
};

const order6: Order = {
  id: 'lC1oT',
  date: new Date(),
  items: null,
};

const processed1: Processed<Order> = processOrder(order1);
const processed2: Processed<Order> = processOrder(order2);
const processed3: Processed<Order> = processOrder(order3);
const processed4: Processed<Order> = processOrder(order4);
const processed5: Processed<Order> = processOrder(order5);
const processed6: Processed<Order> = processOrder(order6);

const check = (
  order: Processed<Order>,
  expected: Pick<Processed<Order>, 'sum' | 'countUniqueItems' | 'countTotalItems'>,
) =>
  order.processed &&
  order.sum === expected.sum &&
  order.countTotalItems === expected.countTotalItems &&
  order.countUniqueItems === expected.countUniqueItems;

const cases: [Processed<Order>, Pick<Processed<Order>, 'sum' | 'countUniqueItems' | 'countTotalItems'>][] = [
  [processed1, { sum: 415, countTotalItems: 25, countUniqueItems: 2 }],
  [processed2, { sum: 10087.003, countTotalItems: 604.01, countUniqueItems: 3 }],
  [processed3, { sum: 105, countTotalItems: 7, countUniqueItems: 2 }],
  [processed4, { sum: 335.16, countTotalItems: 25.2, countUniqueItems: 1 }],
  [processed5, { sum: 0, countTotalItems: 0, countUniqueItems: 0 }],
  [processed6, { sum: 0, countTotalItems: null, countUniqueItems: null }],
];

cases.forEach((test, idx) => {
  const [processed, expected] = test;

  if (!check(processed, expected)) {
    console.log(red(`Заказ №${idx + 1} обработан неверно`));
  }
});

console.log(green('Всё работает правильно!'));
