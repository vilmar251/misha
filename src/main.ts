type PurchaseRequest = { balance: number; price: number; item: string };

const validatePurchase = ({ balance, price, item }: PurchaseRequest): string => {
  if (price <= 0) {
    throw Error(price === 0 ? 'Товар бесплатный!' : 'Некорректная цена!');
  }
  if (balance < price) {
    throw Error('Недостаточно средств!');
  }
  return `Куплено: ${item}. Остаток: ${balance - price} рублей.`;
};

try {
  console.log(validatePurchase({ balance: 100, price: 500, item: 'Книга' }));
} catch (error) {
  console.error((error as Error).message);
}
