import React from "react";
import {
  AlfaRomeo,
  AlphaTauri,
  Alpine,
  AstonMartin,
  Ferrari,
  Haas,
  McLaren,
  Mercedes,
  Netral,
  RedBull,
  Sizes,
  Williams,
} from "./constructors-svg";

interface IconsProps {
  name: string;
  size?: Sizes;
}

export default function CommandIcons({ name, size = "medium" }: IconsProps) {
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
      default:
        return <Netral size={size} />;
    }
  };

  return <>{renderConstructorLogo()}</>;
}
