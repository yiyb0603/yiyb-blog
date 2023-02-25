const camelToKebab = (value: string): string => {
  return value.split('').map((letter, idx) => {
    if (letter.toUpperCase() === letter && isNaN(+letter)) {
      const startLetter = idx === 0 ? '' : '-';

      return `${startLetter}${letter.toLowerCase()}`;
    }

    return letter;
  }).join('');
}

export default camelToKebab;