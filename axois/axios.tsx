import axios from "axios";

export default axios.create({
  baseURL: "http://ergast.com/api/f1",
});

export const NEXT_RACE = "/current/next.json";
export const ALL_RACES = "/2022.json";
export const PILOTS_STANDING = "/2022/driverStandings.json";
export const CONSTRUCTORS_STANDING = "/2022/constructorStandings.json";
export const ALL_PILOTS_CHAMPIONS_STANDING = "/driverStandings/1.json?limit=80";
