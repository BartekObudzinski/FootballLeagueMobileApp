export const getDate = (date: Date): string => {
  const day = date.getDay() >= 10 ? `${date.getDay()}` : `0${date.getDay()}`;
  const month =
    date.getMonth() >= 10 ? `${date.getMonth()}` : `0${date.getMonth()}`;
  return `${day}.${month}.${date.getFullYear()}`;
};
