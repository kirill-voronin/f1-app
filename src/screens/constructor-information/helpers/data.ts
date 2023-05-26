export const smallCardData = (
  points: string,
  podiums: string,
  wins: string,
  polePositions: string,
  fastestLaps: string
) => {
  return [
    {
      title: "Очки",
      data: points,
      icon: "points",
    },
    {
      title: "Подиумы",
      data: podiums,
      icon: "podiums",
    },
    {
      title: "Победы",
      data: wins,
      icon: "wins",
    },
    {
      title: "Поулы",
      data: polePositions,
      icon: "time",
    },
    {
      title: "Лучший круг",
      data: fastestLaps,
      icon: "time",
    },
  ];
};
