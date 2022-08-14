import axios from "axios";

export default axios.create({
    baseURL: "http://ergast.com/api/f1"
})

export const NEXT_RACE = "/current/next.json"
export const ALL_RACES = "/current.json"

