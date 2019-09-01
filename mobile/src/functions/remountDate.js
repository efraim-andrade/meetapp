export default function remountDate(actualDate, type) {
  const year = Number(actualDate.substring(0, 4));
  const month = Number(actualDate.substring(5, 7));
  const day = Number(actualDate.substring(8, 10));

  if (type === 'next') {
    return new Date(year, month - 1, day + 1);
  }

  if (type === 'prev') {
    return new Date(year, month - 1, day - 1);
  }

  return new Date(year, month - 1, day);
}
