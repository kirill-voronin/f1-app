import React from "react";
import Svg, { Rect, Symbol, Use } from "react-native-svg";

interface IconsProps {
  name?: string;
}

export default function Icons({
  name
}: IconsProps) {
  return (
    <Svg
      width={48}
      height={32}>

      {/* Флаг Франции */}
      <Symbol id="Franch" viewBox="0 0 48 32">
        <Rect fill={"#002494"} x={0} y={0} width={16} height={32} />
        <Rect fill={"#F7F7F7"} x={16} y={0} width={16} height={32} />
        <Rect fill={"#ED2938"} x={32} y={0} width={16} height={32} />
      </Symbol>
      
      {/* Флаг Бельгии */}
      <Symbol id="Belgium" viewBox="0 0 48 32">
        <Rect fill={"#000000"} x={0} y={0} width={16} height={32} />
        <Rect fill={"#fdda25"} x={16} y={0} width={16} height={32} />
        <Rect fill={"#ef3340"} x={32} y={0} width={16} height={32} />
      </Symbol>

      <Use href={`#${name}`} x={0} y={0} width="100%" height="100%"></Use>
    </Svg>
  )
}
