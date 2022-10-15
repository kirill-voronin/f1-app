import React from "react";
import Svg, { Path, Symbol, Use } from "react-native-svg";

interface IconsProps {
  name: string;
  color: string;
}

export default function MenuIcons({ name, color = "#FFFFFF" }: IconsProps) {
  return (
    <Svg>
      <Symbol id="Calendar" viewBox="0 0 36 36">
        <Path
          d="M9.69223 8.30769C9.32501 8.30769 8.97283 8.16181 8.71316 7.90215C8.4535 7.64248 8.30762 7.2903 8.30762 6.92308V1.38462C8.30762 1.01739 8.4535 0.66521 8.71316 0.405544C8.97283 0.145879 9.32501 0 9.69223 0C10.0595 0 10.4116 0.145879 10.6713 0.405544C10.931 0.66521 11.0768 1.01739 11.0768 1.38462V6.92308C11.0768 7.2903 10.931 7.64248 10.6713 7.90215C10.4116 8.16181 10.0595 8.30769 9.69223 8.30769ZM26.3076 8.30769C25.9404 8.30769 25.5882 8.16181 25.3285 7.90215C25.0689 7.64248 24.923 7.2903 24.923 6.92308V1.38462C24.923 1.01739 25.0689 0.66521 25.3285 0.405544C25.5882 0.145879 25.9404 0 26.3076 0C26.6748 0 27.027 0.145879 27.2867 0.405544C27.5464 0.66521 27.6922 1.01739 27.6922 1.38462V6.92308C27.6922 7.2903 27.5464 7.64248 27.2867 7.90215C27.027 8.16181 26.6748 8.30769 26.3076 8.30769Z"
          fill={color}
        />
        <Path
          d="M31.8462 36H4.15385C1.86369 36 0 34.1363 0 31.8461V6.92307C0 4.63292 1.86369 2.76923 4.15385 2.76923H31.8462C34.1363 2.76923 36 4.63292 36 6.92307V31.8461C36 34.1363 34.1363 36 31.8462 36ZM4.15385 5.53846C3.78662 5.53846 3.43444 5.68434 3.17478 5.944C2.91511 6.20367 2.76923 6.55585 2.76923 6.92307V31.8461C2.76923 32.2134 2.91511 32.5655 3.17478 32.8252C3.43444 33.0849 3.78662 33.2308 4.15385 33.2308H31.8462C32.2134 33.2308 32.5656 33.0849 32.8252 32.8252C33.0849 32.5655 33.2308 32.2134 33.2308 31.8461V6.92307C33.2308 6.55585 33.0849 6.20367 32.8252 5.944C32.5656 5.68434 32.2134 5.53846 31.8462 5.53846H4.15385Z"
          fill={color}
        />
        <Path d="M1.88159 13.3167L34.2832 13.3167" stroke={color} strokeWidth="3" />
      </Symbol>

      <Symbol id="Pilots" viewBox="0 0 36 36">
        <Path
          d="M35.1355 27.7692L18.0747 23.0372C16.6954 22.6549 15.7366 21.3562 15.7366 19.8727C15.74 17.9369 17.2474 16.3693 19.1088 16.3658H34.4881C35.1085 16.3658 35.6121 15.8421 35.6121 15.1968C35.6121 14.5515 35.1085 14.0278 34.4881 14.0278H19.1088C16.0042 14.029 13.4896 16.644 13.4885 19.8727C13.4885 22.4153 15.1319 24.6398 17.4946 25.2956L34.5555 30.0277C35.1557 30.1937 35.7717 29.8231 35.9313 29.2C36.0921 28.5758 35.7346 27.9352 35.1355 27.7692Z"
          fill={color}
        />
        <Path
          d="M19.1089 21.0417C19.7297 21.0417 20.233 20.5183 20.233 19.8727C20.233 19.2271 19.7297 18.7037 19.1089 18.7037C18.4881 18.7037 17.9849 19.2271 17.9849 19.8727C17.9849 20.5183 18.4881 21.0417 19.1089 21.0417Z"
          fill={color}
        />
        <Path
          d="M18.0006 0C16.8473 0 15.6637 0.113391 14.4755 0.349526L14.6824 1.49747L14.8914 2.64541C15.9413 2.43733 16.9754 2.33797 17.9859 2.33797C22.327 2.33797 26.2691 4.17093 29.1231 7.13664C31.9748 10.1047 33.753 14.1891 33.753 18.7037V30.1516C33.753 31.1534 33.3495 32.0161 32.7324 32.6509C32.113 33.2833 31.2621 33.662 30.3674 33.662C30.0807 33.662 29.784 33.6235 29.4861 33.5416L5.69782 26.9451C4.68617 26.6645 3.8465 25.9269 3.45871 24.9566C2.68199 23.0278 2.24923 20.9213 2.2481 18.7037C2.2481 17.4319 2.39086 16.1226 2.69548 14.7865C4.08143 8.67736 8.96094 3.8179 14.8892 2.64658L14.6779 1.49864L14.4665 0.350695C7.64917 1.71139 2.11434 7.22315 0.508071 14.2476C0.162987 15.7567 0 17.2495 0 18.7037C0 21.2393 0.496831 23.6567 1.38258 25.8591C2.05926 27.5354 3.46208 28.7453 5.11556 29.2035L28.9005 35.8001C29.3872 35.9357 29.893 36 30.373 36C33.3866 35.9942 36 33.4645 36 30.1527V18.7037C36.0011 8.38628 27.9214 0.00233797 18.0006 0Z"
          fill={color}
        />
      </Symbol>

      <Use href={`#${name}`} x={0} y={0} width="100%" height="100%" />
    </Svg>
  );
}
