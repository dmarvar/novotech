import { formatInTimeZone } from "date-fns-tz";

const dateFormat = (
  date: Date | string,
  format: string = "dd/MM/yy",
): string => {
  return formatInTimeZone(date, "Europe/Paris", format);
};

export default dateFormat;
