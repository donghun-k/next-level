import { format } from "date-fns";
import { ko } from "date-fns/locale";

export const convertToLocaleString = (date: string) => {
  return format(new Date(date), "yyyy년 MMMM d일", { locale: ko });
};

export const convertToLocaleStringWithTime = (date: string) => {
  return format(new Date(date), "yyyy년 MMMM d일 a h:mm", { locale: ko });
};
