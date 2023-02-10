import React from "react";
import Svg, { Path, Rect, Symbol, Use } from "react-native-svg";

interface IconsProps {
  name: "wins-all-time";
  size?: string;
}

interface SizeOptionsProps {
  [key: string]: SizeOption;
}

interface SizeOption {
  width: number;
  height: number;
}

export default function StatisticIcons({ name, size = "default" }: IconsProps) {
  const sizeOptions: SizeOptionsProps = {
    default: {
      width: 33,
      height: 33,
    },
    small: {
      width: 24,
      height: 16,
    },
    medium: {
      width: 48,
      height: 32,
    },
    buttonBack: {
      width: 28,
      height: 24,
    },
  };

  return (
    <Svg width={sizeOptions[size].width} height={sizeOptions[size].height}>
      {/* Кубок */}
      <Symbol id="wins-all-time" viewBox="0 0 33 33">
        <Rect width="33" height="33" fill="white" />
        <Path
          d="M30.7199 3.58991C30.1807 1.47598 28.3677 0 26.311 0C26.3107 0 26.3103 0 26.3099 0H23.6793H9.32054H6.69027C6.68989 0 6.68956 0 6.68918 0C4.63248 0 2.81948 1.47611 2.2802 3.58978C2.0053 4.66731 1.94188 6.37351 3.20142 8.38226C4.16352 9.91676 5.72825 11.3316 7.85494 12.5965C8.11875 16.6045 11.1183 19.8775 15 20.5609V23.8464H10.3462C9.51783 23.8464 8.84623 24.518 8.84623 25.3464V31.5C8.84623 32.3284 9.51783 33 10.3462 33H22.6538C23.4822 33 24.1538 32.3284 24.1538 31.5V25.3463C24.1538 24.5178 23.4822 23.8462 22.6538 23.8462H18.0001V20.5635C21.8917 19.886 24.9005 16.6052 25.1605 12.5874C27.2796 11.3251 28.8389 9.91315 29.7987 8.38232C31.0583 6.37358 30.9948 4.6675 30.7199 3.58991ZM5.18697 4.33151C5.41017 3.45733 6.11148 3.00004 6.68969 3.00004H6.69001H7.82284L7.83116 8.97104C5.51155 7.18781 4.89474 5.47678 5.18697 4.33151ZM21.1537 26.8463V30H11.8461V26.8463H21.1537ZM22.1795 11.7044C22.1795 11.7086 22.1795 11.7126 22.1795 11.7167V12.0217C22.1795 15.1485 19.6354 17.6924 16.5084 17.6924C13.3802 17.6924 10.8354 15.1487 10.8354 12.0197L10.8228 3.0001H22.1795V11.7044H22.1795ZM25.1794 8.96298V2.99997H26.3104H26.3108C26.8886 2.99997 27.5902 3.45739 27.8133 4.33157C28.1048 5.47523 27.4905 7.18279 25.1794 8.96298Z"
          fill="#BAB300"
        />
      </Symbol>

      <Use href={`#${name}`} x={0} y={0} width="100%" height="100%"></Use>
    </Svg>
  );
}
