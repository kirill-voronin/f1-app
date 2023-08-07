export function getAge(date: Date): string {
  const age = Math.floor(
    (new Date().getTime() - new Date(date.toString()).getTime()) /
      (24 * 3600 * 365.25 * 1000)
  ).toString();

  switch (age[age.length - 1]) {
    case "1":
      return `${age} год`;
    case "2":
    case "3":
    case "4":
      return `${age} года`;
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
      return `${age} лет`;
    default:
      return age.toString();
  }
}
