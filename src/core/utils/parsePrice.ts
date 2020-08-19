const parsePrice = (price: number): string => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return formatter.format(price);
};

export default parsePrice;
