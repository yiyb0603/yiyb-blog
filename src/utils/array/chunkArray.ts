import isEmpty from '../is-packages/isEmpty';

type Props<T> = {
  items: T[];
  perItems: number;
}

const chunkArray = <T>({
  items,
  perItems,
}: Props<T>): T[][] => {
  let results: T[][] = [];
  let temps: T[] = [];

  for (const [index, item] of items.entries()) {
    temps.push(item);

    if ((index + 1) % perItems === 0) {
      results.push(temps);

      temps = [];
    }
  }

  if (!isEmpty(temps)) {
    results.push(temps);
  }

  return results;
}

export default chunkArray;