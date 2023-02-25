import { MRDataRace } from "../axois/data-race";

export const last: MRDataRace = {
  MRData: {
    xmlns: "http://ergast.com/mrd/1.5",
    series: "f1",
    url: "http://ergast.com/api/f1/current/last.json",
    limit: "30",
    offset: "0",
    total: "1",
    RaceTable: {
      season: "2022",
      round: "22",
      Races: [
        {
          season: "2022",
          round: "22",
          url: "http://en.wikipedia.org/wiki/2022_Abu_Dhabi_Grand_Prix",
          raceName: "Abu Dhabi Grand Prix",
          Circuit: {
            circuitId: "yas_marina",
            url: "http://en.wikipedia.org/wiki/Yas_Marina_Circuit",
            circuitName: "Yas Marina Circuit",
            Location: {
              lat: "24.4672",
              long: "54.6031",
              locality: "Abu Dhabi",
              country: "UAE",
            },
          },
          date: "2022-11-20",
          time: "13:00:00Z",
          FirstPractice: {
            date: "2022-11-18",
            time: "10:00:00Z",
          },
          SecondPractice: {
            date: "2022-11-18",
            time: "13:00:00Z",
          },
          ThirdPractice: {
            date: "2022-11-19",
            time: "11:00:00Z",
          },
          Qualifying: {
            date: "2022-11-19",
            time: "14:00:00Z",
          },
        },
      ],
    },
  },
};
