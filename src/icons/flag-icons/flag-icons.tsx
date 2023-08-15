import React from "react";

import {
  Argentina,
  Australia,
  Austria,
  Azerbaijan,
  Bahrain,
  Belgium,
  Brazil,
  Canada,
  China,
  Denmark,
  Finland,
  France,
  Germany,
  Hungary,
  Italy,
  Japan,
  Mexico,
  Monaco,
  Netherland,
  Netral,
  NewZeland,
  Qatar,
  SaudiArabia,
  Singapore,
  Sizes,
  SouthAfrica,
  Spain,
  Thailand,
  UAE,
  UK,
  USA,
} from "./flags-svg";

interface IconsProps {
  name?: string;
  size: Sizes;
  nationality?: string;
}

const NationalityFlag: { [key: string]: string } = {
  Dutch: "Netherlands",
  Mexican: "Mexico",
  Monegasque: "Monaco",
  British: "UK",
  Spanish: "Spain",
  French: "France",
  Finnish: "Finland",
  German: "Germany",
  Australian: "Australia",
  Danish: "Denmark",
  Canadian: "Canada",
  Japanese: "Japan",
  Chinese: "China",
  Thai: "Thailand",
  Brazilian: "Brazil",
  Austrian: "Austria",
  SouthAfrican: "SouthAfrica",
  American: "USA",
  NewZealander: "NewZeland",
  Italian: "Italy",
  Argentine: "Argentina",
};

export default function FlagIcons({ name, size, nationality }: IconsProps) {
  if (nationality) {
    name = NationalityFlag[nationality];
  }

  if (!name) {
    name = "Netral";
  }

  const renderSvg = () => {
    switch (name) {
      case "Netherlands":
        return <Netherland size={size} />;
      case "NewZeland":
        return <NewZeland size={size} />;
      case "Austria":
        return <Austria size={size} />;
      case "UK":
        return <UK size={size} />;
      case "Canada":
        return <Canada size={size} />;
      case "Azerbaijan":
        return <Azerbaijan size={size} />;
      case "Monaco":
        return <Monaco size={size} />;
      case "Spain":
        return <Spain size={size} />;
      case "Australia":
        return <Australia size={size} />;
      case "Saudi Arabia":
        return <SaudiArabia size={size} />;
      case "Bahrain":
        return <Bahrain size={size} />;
      case "France":
        return <France size={size} />;
      case "Belgium":
        return <Belgium size={size} />;
      case "Italy":
        return <Italy size={size} />;
      case "Singapore":
        return <Singapore size={size} />;
      case "Japan":
        return <Japan size={size} />;
      case "USA":
      case "United States":
        return <USA size={size} />;
      case "Mexico":
        return <Mexico size={size} />;
      case "Brazil":
        return <Brazil size={size} />;
      case "UAE":
        return <UAE size={size} />;
      case "Germany":
        return <Germany size={size} />;
      case "Finland":
        return <Finland size={size} />;
      case "SouthAfrica":
        return <SouthAfrica size={size} />;
      case "Argentina":
        return <Argentina size={size} />;
      case "Denmark":
        return <Denmark size={size} />;
      case "China":
        return <China size={size} />;
      case "Thailand":
        return <Thailand size={size} />;
      case "Hungary":
        return <Hungary size={size} />;
      case "Qatar":
        return <Qatar size={size} />;
      default:
        return <Netral size={size} />;
    }
  };

  return <>{renderSvg()}</>;
}
