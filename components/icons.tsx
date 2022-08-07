import React from "react";
import Svg, { G, Polygon, Rect, Symbol, Use } from "react-native-svg";

interface IconsProps {
  name?: string;
  size?: string;
}

interface SizeOptionsProps {
  [key: string]: SizeOption;
}

interface SizeOption {
  width: number;
  height: number;
}

export default function Icons({
  name,
  size = "medium"
}: IconsProps) {
  const sizeOptions: SizeOptionsProps = {
    small: {
      width: 24,
      height: 16,
    },
    medium: {
      width: 48,
      height: 32,
    }
  }

  return (
    <Svg
      width={sizeOptions[size].width}
      height={sizeOptions[size].height}>

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

      {/* Флаг Голандии */}
      <Symbol id="Netherlands" viewBox="0 0 48 32">
        <Rect fill={"#AE1C28"} x={0} y={0} width={48} height={11} />
        <Rect fill={"#FFFFFF"} x={0} y={11} width={48} height={10} />
        <Rect fill={"#21468B"} x={0} y={21} width={48} height={11} />
      </Symbol>
      
      {/* Стрелка вниз */}
      <Symbol id="arrow-down">
        <G id="arrow-down" fill="#000000">
          <Polygon id="Shape" points="6 7 12 13 18 7 20 9 12 17 4 9"></Polygon>
        </G>
      </Symbol>

      <Use href={`#${name}`} x={0} y={0} width="100%" height="100%"></Use>
    </Svg>
  )
}
