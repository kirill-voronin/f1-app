import axios from "axios";

export default axios.create({
  baseURL: "http://ergast.com/api/f1",
});

export const year = "current";

export const NEXT_RACE = `/current/next.json`;
export const ALL_RACES = `/${year}.json`;
export const PILOTS_STANDING = `/${year}/driverStandings.json`;
export const CONSTRUCTORS_STANDING = `/${year}/constructorStandings.json`;
export const ALL_PILOTS_CHAMPIONS_STANDING = `/driverStandings/1.json?limit=80`;
