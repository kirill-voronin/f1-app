export interface MRDataSprintResults {
  MRData: MRData;
}

export interface MRData {
  xmlns: string;
  series: string;
  url: string;
  limit: string;
  offset: string;
  total: string;
  RaceTable: RaceTable;
}

export interface RaceTable {
  season: string;
  round: string;
  Races: Race[];
}

export interface Race {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: Date;
  time: string;
  SprintResults: SprintResult[];
}

export interface Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: Location;
}

export interface Location {
  lat: string;
  long: string;
  locality: string;
  country: string;
}

export interface SprintResult {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: string;
  status: Status;
  Time?: SprintResultTime;
  FastestLap?: FastestLap;
}

export interface Constructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}

export interface Driver {
  driverId: string;
  permanentNumber: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: Date;
  nationality: string;
}

export interface FastestLap {
  lap: string;
  Time: FastestLapTime;
}

export interface FastestLapTime {
  time: string;
}

export interface SprintResultTime {
  millis: string;
  time: string;
}

export enum Status {
  Finished = "Finished",
  Retired = "Retired",
}
