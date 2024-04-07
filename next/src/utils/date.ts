import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/ko';

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.locale('ko');

export const convertToLocaleString = (date: string) => {
  return dayjs(date).tz('Asia/Seoul').format('YYYY년 MMMM D일');
};

export const convertToLocaleStringWithTime = (date: string) => {
  return dayjs(date).tz('Asia/Seoul').format('YYYY년 MMMM D일 A h:mm');
};
