export function getTimeToRace(date?: string, time?: string): string {
  if (!date && !time) {
    return "";
  }
  const currentDate = new Date();

  let timeToRace = Math.floor(
    Math.abs(new Date(`${date}T${time}`).getTime() - currentDate.getTime()) /
      (1000 * 60 * 60 * 24) // ms->ss->mm->hh->dd
  );

  if (timeToRace >= 1) {
    return `До гонки ${timeToRace} ${getCorrectDayName(timeToRace)}`;
  }

  timeToRace = Math.floor(
    Math.abs(new Date(`${date}T${time}`).getTime() - currentDate.getTime()) /
      (1000 * 60 * 60) // ms->ss->mm->hh
  );

  return `До гонки ${timeToRace} ${getCorrectHourName(timeToRace)}`;
}

const getCorrectHourName = (hour: number) => {
  if (hour === 11 || hour === 12) {
    return "часов";
  }

  switch (hour % 10) {
    case 1:
      return "час";
    case 2:
    case 3:
    case 4:
      return "часа";
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 0:
      return "5";
    default:
      return "";
  }
};

const getCorrectDayName = (day: number) => {
  if (day === 11 || day === 12) {
    return "дней";
  }

  switch (day % 10) {
    case 1:
      return "день";
    case 2:
    case 3:
    case 4:
      return "дня";
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 0:
      return "дней";
    default:
      return "";
  }
};
