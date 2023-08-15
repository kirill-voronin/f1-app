import moment from "moment";
import "moment/locale/ru";

moment.locale("ru");

export function getLocalDateTime(date: string, time: string) {
  let curDate: Date;
  if (date && time) {
    curDate = new Date(`${date}T${time}`);
    return `${moment(curDate).format("DD MMMM")} ${moment(curDate).format("HH:mm")}`;
  } else if (date && !time) {
    curDate = new Date(`${date}`);
    return `${moment(curDate).format("DD MMMM")}`;
  } else {
    curDate = new Date(`${date}T${time}`);
    return `${moment(curDate).format("DD MMMM")} ${moment(curDate).format("HH:mm")}`;
  }
}
