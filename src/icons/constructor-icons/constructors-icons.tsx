import React from "react";

import {
  AlfaRomeo,
  AlphaTauri,
  Alpine,
  AstonMartin,
  Benetton,
  Brawn,
  Ferrari,
  Haas,
  MatraFord,
  McLaren,
  Mercedes,
  Netral,
  RedBull,
  Renault,
  Sizes,
  TeamLotus,
  Tyrrell,
  Williams,
} from "./constructors-svg";

interface IconsProps {
  name: string;
  size?: Sizes;
}

export default function ConstructorIcons({ name, size = "medium" }: IconsProps) {
  const renderConstructorLogo = () => {
    switch (name) {
      case "mercedes":
        return <Mercedes size={size} />;
      case "red_bull":
        return <RedBull size={size} />;
      case "ferrari":
        return <Ferrari size={size} />;
      case "alpine":
        return <Alpine size={size} />;
      case "mclaren":
        return <McLaren size={size} />;
      case "alfa":
        return <AlfaRomeo size={size} />;
      case "aston_martin":
        return <AstonMartin size={size} />;
      case "haas":
        return <Haas size={size} />;
      case "alphatauri":
        return <AlphaTauri size={size} />;
      case "williams":
        return <Williams size={size} />;
      case "brawn":
        return <Brawn size={size} />;
      case "renault":
        return <Renault size={size} />;
      case "benetton":
        return <Benetton size={size} />;
      case "team_lotus":
      case "lotus-ford":
      case "lotus-climax":
        return <TeamLotus size={size} />;
      case "tyrrell":
        return <Tyrrell size={size} />;
      case "matra-ford":
        return <MatraFord size={size} />;
      default:
        return <Netral size={size} />;
    }
  };

  return <>{renderConstructorLogo()}</>;
}
