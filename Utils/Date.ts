export const GetDate = (): string => {
  const date = new Date();

  const pad = (n: number) => (n < 10 ? `0${n}` : n);

  const formattedDate =
    `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
      date.getDate()
    )} ` +
    `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
      date.getSeconds()
    )}`;

  return formattedDate;
};
