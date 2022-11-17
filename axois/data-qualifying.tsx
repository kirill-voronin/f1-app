export interface MRDataQualifyingResults {
  MRData: MRData;
}

export interface MRData {
  xmlns:     string;
  series:    string;
  url:       string;
  limit:     string;
  offset:    string;
  total:     string;
  RaceTable: RaceTable;
}

export interface RaceTable {
  season: string;
  round:  string;
  Races:  Race[];
}

export interface Race {
  season:            string;
  round:             string;
  url:               string;
  raceName:          string;
  Circuit:           Circuit;
  date:              Date;
  time:              string;
  QualifyingResults: QualifyingResult[];
}

export interface Circuit {
  circuitId:   string;
  url:         string;
  circuitName: string;
  Location:    Location;
}

export interface Location {
  lat:      string;
  long:     string;
  locality: string;
  country:  string;
}

export interface QualifyingResult {
  number:      string;
  position:    string;
  Driver:      Driver;
  Constructor: Constructor;
  Q1:          string;
  Q2?:         string;
  Q3?:         string;
}

export interface Constructor {
  constructorId: string;
  url:           string;
  name:          string;
  nationality:   string;
}

export interface Driver {
  driverId:        string;
  permanentNumber: string;
  code:            string;
  url:             string;
  givenName:       string;
  familyName:      string;
  dateOfBirth:     Date;
  nationality:     string;
}
