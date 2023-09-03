/** Основная модель для получения всех данных */
export interface RequestModel {
  MRData: MRData;
}

export interface MRData {
  /** URL с документацией API */
  xmlns: string;
  /** Гоночная серия */
  series: string;
  /** URL запроса */
  url: string;
  /** Предел для запроса данных (можно увеличить) */
  limit: string;
  /** Смещения для запроса данных */
  offset: string;
  /** Количество запрошенных записей */
  total: string;
  /** Таблица гонок */
  RaceTable?: RaceTable;
  /** Таблица с зачетом */
  StandingsTable?: StandingsTable;
}

/** Описания гонок сезона */
export interface RaceTable {
  /** Год сезона */
  season: string;
  /** Id конструктора (команды) */
  constructorId?: string;
  /** Id пилота */
  driverId?: string;
  /** Номер гонки */
  round?: string;
  /** Список всех гонок сезона */
  Races: Race[];
}

/** Результаты зачета */
export interface StandingsTable {
  /** Год сезона */
  season?: string;
  /** Параметр поиска конструкторов, занявших 1 место в сезоне */
  constructorStandings?: string;
  /** Параметр поиска пилотов, занявших 1 место в сезоне */
  driverStandings?: string;
  /** Турнирная таблица */
  StandingsLists: StandingsList[];
}

/** Запись турнирной таблицы */
export interface StandingsList {
  /** Год проведения турнира */
  season: string;
  /** Количество гонок в году */
  round: string;
  /** Турнирная таблица конструкторов */
  ConstructorStandings?: ConstructorStanding[];
  /** Турнирная таблица пилотов */
  DriverStandings?: DriverStanding[];
}

/** Запись турнирной таблицы конструкторов */
export interface ConstructorStanding {
  /** Место за сезон */
  position: string;
  positionText: string;
  /** Очки за сезон */
  points: string;
  /** Победы за сезон */
  wins: string;
  /** Информация о конструкторе */
  Constructor: Constructor;
}

/** Запись турнирной таблицы пилот */
export interface DriverStanding {
  /** Место за сезон */
  position: string;
  positionText: string;
  /** Очки за сезон */
  points: string;
  /** Победы за сезон */
  wins: string;
  /** Информация о пилоте */
  Driver: Driver;
  /** Информация о конструкторах, за которых выступал пилот */
  Constructors: Constructor[];
}

/** Информация о гонке */
export interface Race {
  /** Год сезона */
  season: string;
  /** Номер гонки */
  round: string;
  /** Адрес страницы на wiki */
  url: string;
  /** Название Гран-при */
  raceName: string;
  /** Автодром */
  Circuit: Circuit;
  /** Дата проведения гонки */
  date: string;
  /** Время проведения гонки */
  time: string;
  /** Время проведения первой практики */
  FirstPractice: DateTime;
  /** Время проведения второй практики */
  SecondPractice: DateTime;
  /** Время проведения третьей практики */
  ThirdPractice: DateTime;
  /** Время проведения квалификации */
  Qualifying: DateTime;
  /** Время проведения спринта */
  Sprint?: DateTime;
  /** Результаты спринта */
  SprintResults?: SprintResult[];
  /** Результаты квалификации */
  QualifyingResults?: QualifyingResult[];
  /** Результаты гонки */
  Results?: Result[];
}

/** Результаты квалификации */
export interface QualifyingResult {
  /** Номер пилота */
  number: string;
  /** Позиция на финише */
  position: string;
  /** Пилот */
  Driver: Driver;
  /** Конструктор (команда) */
  Constructor: Constructor;
  /** Результаты первого сегмента */
  Q1: string;
  /** Результаты второго сегмента */
  Q2: string;
  /** Результаты третьего сегмента */
  Q3: string;
}

/** Автодром */
export interface Circuit {
  circuitId: string;
  /** Адрес страницы на wiki */
  url: string;
  /** Название автодрома */
  circuitName: string;
  /** Местоположение автодрома */
  Location: Location;
}

/** Результаты гонки */
export interface Result {
  /** Номер пилота */
  number: string;
  /** Позиция на финише */
  position: string;
  positionText: string;
  /** Очки за гонку */
  points: string;
  /** Пилот */
  Driver: Driver;
  /** Конструктор (команда) */
  Constructor: Constructor;
  /** Стартовая позиция */
  grid: string;
  /** Пройденные круги */
  laps: string;
  /** Статус пилота на конец гонки */
  status: string;
  /** Результат по времени */
  Time?: ResultTime;
  /** Лучший круг */
  FastestLap?: FastestLap;
}

/** Местоположение */
export interface Location {
  /** Широта */
  lat: string;
  /** Долгота */
  long: string;
  /** Локация (город) */
  locality: string;
  /** Страна */
  country: string;
}

/** Результаты спринта */
export interface SprintResult {
  /** Номер пилота */
  number: string;
  /** Позиция на финише */
  position: string;
  /** Позиция на финише */
  positionText: string;
  /** Очки за гонку */
  points: string;
  /** Пилот */
  Driver: Driver;
  /** Конструктор (команда) */
  Constructor: Constructor;
  /** Стартовая позиция */
  grid: string;
  /** Пройденные круги */
  laps: string;
  /** Статус пилота на конец гонки */
  status: string;
  /** Результат по времени */
  Time?: ResultTime;
  /** Лучший круг */
  FastestLap?: FastestLap;
}

/** Пилот */
export interface Driver {
  driverId: string;
  /** Выбранный пилотом номер на карьеру */
  permanentNumber: string;
  /** 3-х буквенный код по фамилии пилота */
  code: string;
  /** Адрес страницы на wiki */
  url: string;
  /** Имя */
  givenName: string;
  /** Фамилия */
  familyName: string;
  /** Дата рождения */
  dateOfBirth: Date;
  /** Национальность*/
  nationality: string;
}

/** Конструктор (команда) */
export interface Constructor {
  constructorId: string;
  /** Адрес страницы на wiki */
  url: string;
  /** Название */
  name: string;
  /** Национальность */
  nationality: string;
}

/** Результаты спринта */
export interface ResultTime {
  /** Время в милисикундах */
  millis: string;
  /** Время в формате mm:ss.ms */
  time: string;
}

/** Лучший круг */
export interface FastestLap {
  /** Позиция лучшего круга */
  rank?: string;
  /** Круг, на котором было показано лучшее время */
  lap: string;
  /** Результат лучшего круга */
  Time: FastestLapTime;
  /** Средняя скорость */
  AverageSpeed: AverageSpeed;
}

/** Результат лучшего круга */
export interface FastestLapTime {
  /** Время в формате m:ss.ms */
  time: string;
}

/** Средняя скорость */
export interface AverageSpeed {
  /** Единицы измерения */
  units: string;
  /** Скорость */
  speed: string;
}

/** Дата и время проведения */
export interface DateTime {
  /** Дата yyyy-mm-dd */
  date: string;
  /** Время hh:mm:ssZ */
  time: string;
}
