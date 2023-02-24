import React from "react";
import Svg, { Path, Rect, Symbol, Use } from "react-native-svg";

interface IconsProps {
  name: string;
  color: string;
}

export default function MenuIcons({ name, color = "#FFFFFF" }: IconsProps) {
  return (
    <Svg>
      <Symbol id="Календарь" viewBox="0 0 36 36">
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

      <Symbol id="Пилоты" viewBox="0 0 36 36">
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

      <Symbol id="Команды" viewBox="0 0 36 36">
        <Path
          d="M35.9999 26.8828C35.9999 24.362 35.3691 21.9279 34.1755 19.8436C33.3169 18.3445 32.2114 17.0996 30.9302 16.1744C32.4386 14.465 33.3824 12.049 33.3824 9.37256C33.3824 4.20457 29.8688 0 25.5502 0C22.9894 0 20.5906 1.51556 19.1335 4.00344C18.7633 3.93891 18.385 3.90409 18 3.90409C17.6149 3.90409 17.2367 3.93902 16.8665 4.00344C15.4093 1.51556 13.0105 0 10.4498 0C6.1311 0 2.61754 4.20457 2.61754 9.37256C2.61754 12.049 3.56131 14.465 5.0698 16.1744C3.78853 17.0994 2.68297 18.3445 1.82453 19.8435C0.630923 21.9279 0 24.362 0 26.8828V32.096H7.55029V36H28.4498V32.096H36V26.8828H35.9999ZM25.5502 2.31324C28.8031 2.31324 31.4494 5.48003 31.4494 9.37267C31.4494 13.2653 28.8031 16.4321 25.5502 16.4321C25.492 16.4321 25.4337 16.4311 25.3753 16.429C25.3798 16.4142 25.3834 16.399 25.3878 16.3842C25.4885 16.0426 25.5725 15.6917 25.6398 15.3333C25.6446 15.3078 25.65 15.2826 25.6545 15.257C25.672 15.1603 25.6874 15.0627 25.7024 14.9649C25.7094 14.9186 25.7167 14.8725 25.7232 14.8261C25.7353 14.7388 25.7463 14.6511 25.7565 14.5631C25.7635 14.5019 25.7699 14.4407 25.776 14.3794C25.7837 14.3017 25.7911 14.2239 25.7972 14.1456C25.8034 14.0657 25.808 13.9856 25.8125 13.9055C25.8159 13.8423 25.8203 13.7794 25.8227 13.7159C25.828 13.5798 25.831 13.4434 25.8314 13.307C25.8314 13.2969 25.8321 13.2871 25.8321 13.2769C25.8321 13.2714 25.8317 13.266 25.8317 13.2606C25.8315 13.1212 25.8281 12.9827 25.8229 12.8446C25.8213 12.8044 25.8193 12.7644 25.8174 12.7244C25.8117 12.607 25.8042 12.4902 25.7951 12.374C25.7929 12.3476 25.7912 12.3212 25.789 12.295C25.4969 8.91676 23.7134 6.02523 21.1406 4.68778C22.2493 3.19732 23.8529 2.31324 25.5502 2.31324ZM15.9588 6.6529C15.9777 6.64469 15.9967 6.63694 16.0156 6.62884C16.0742 6.60374 16.1334 6.57992 16.1928 6.5569C16.2379 6.53967 16.2832 6.52302 16.3288 6.50706C16.3619 6.49538 16.3952 6.48416 16.4285 6.47305C16.4881 6.45351 16.5479 6.43442 16.6083 6.41696C17.0548 6.28719 17.5205 6.21676 17.9998 6.21676C18.4794 6.21722 18.9453 6.28777 19.3919 6.41754C19.4519 6.43489 19.5113 6.45385 19.5706 6.47329C19.6044 6.4845 19.6382 6.49584 19.6718 6.50775C19.7168 6.5236 19.7617 6.54002 19.8062 6.55702C19.8664 6.58027 19.9263 6.60432 19.9856 6.62977C20.0039 6.63752 20.0221 6.64492 20.0403 6.6529C22.0132 7.52599 23.4924 9.62712 23.8272 12.177C23.8298 12.1973 23.8323 12.2178 23.8348 12.2383C23.8456 12.3247 23.8545 12.4118 23.8626 12.4991C23.8655 12.5312 23.8686 12.5633 23.8712 12.5956C23.8775 12.6752 23.8823 12.7555 23.8865 12.836C23.8883 12.8705 23.8907 12.9048 23.892 12.9394C23.8961 13.0422 23.8983 13.1456 23.8986 13.2496C23.8986 13.2586 23.8991 13.2674 23.8991 13.2764C23.8991 13.2806 23.8989 13.2849 23.8989 13.289C23.8987 13.3896 23.8962 13.4896 23.8925 13.5892C23.8914 13.6205 23.8902 13.6518 23.8887 13.6831C23.8841 13.7793 23.8781 13.8751 23.8704 13.9701C23.8674 14.0069 23.8633 14.0436 23.8599 14.0802C23.854 14.1418 23.8474 14.2032 23.8402 14.2642C23.8346 14.3118 23.829 14.3594 23.8227 14.4067C23.8129 14.4788 23.8021 14.5504 23.7905 14.6217C23.7801 14.6852 23.7688 14.7485 23.757 14.8116C23.75 14.8497 23.7426 14.8877 23.735 14.9256C23.7161 15.0194 23.6955 15.1126 23.6734 15.2055C23.6646 15.2423 23.6564 15.2795 23.6471 15.316C23.6337 15.3692 23.6192 15.422 23.6048 15.4747C23.5932 15.5169 23.5813 15.5589 23.569 15.6008C23.5551 15.6483 23.5414 15.696 23.5267 15.7431C23.5017 15.8233 23.4754 15.9027 23.448 15.9815C23.4359 16.0167 23.4229 16.0515 23.4102 16.0865C23.3864 16.1521 23.3618 16.2173 23.3363 16.2819C23.3333 16.2895 23.3303 16.2971 23.3273 16.3048C23.3181 16.3277 23.3091 16.3507 23.2997 16.3736C23.2711 16.4434 23.2413 16.5125 23.2108 16.581C23.1989 16.6076 23.1874 16.6345 23.1752 16.661C23.1744 16.6627 23.1737 16.6643 23.1729 16.666C23.1394 16.7388 23.1046 16.8105 23.0691 16.8818C23.055 16.91 23.0411 16.9383 23.0267 16.9662C22.988 17.0413 22.9483 17.1155 22.9074 17.1886C22.882 17.2341 22.8554 17.2786 22.8291 17.3234C22.8068 17.3613 22.7845 17.3993 22.7616 17.4367C22.732 17.485 22.7017 17.5328 22.671 17.5803C22.6501 17.6126 22.629 17.6446 22.6078 17.6766C22.5753 17.7251 22.5425 17.7735 22.5091 17.821C22.4883 17.8505 22.467 17.8794 22.4458 17.9085C22.411 17.9562 22.3763 18.0041 22.3405 18.0507C22.3193 18.0784 22.2972 18.105 22.2756 18.1323C22.2174 18.2057 22.1579 18.2775 22.0972 18.348C22.0611 18.3897 22.0253 18.4316 21.9884 18.4722C21.9628 18.5003 21.9366 18.5276 21.9106 18.5552C21.8683 18.6002 21.8257 18.6447 21.7823 18.6882C21.7603 18.7103 21.738 18.7322 21.7157 18.7539C21.6632 18.805 21.6101 18.8551 21.556 18.9041C21.5414 18.9174 21.5269 18.931 21.5121 18.9442C20.5301 19.8177 19.3147 20.3355 17.9999 20.3355C16.6849 20.3355 15.4693 19.8176 14.4874 18.9438C14.4729 18.9309 14.4586 18.9176 14.4442 18.9045C14.39 18.8553 14.3366 18.8049 14.2839 18.7536C14.2618 18.7319 14.2396 18.7103 14.2178 18.6883C14.1742 18.6446 14.1315 18.5998 14.089 18.5547C14.0632 18.5272 14.0371 18.5002 14.0116 18.4722C13.9746 18.4315 13.9387 18.3895 13.9025 18.3477C13.8415 18.2771 13.7819 18.205 13.7235 18.1313C13.7022 18.1044 13.6803 18.0781 13.6594 18.0508C13.6235 18.0041 13.5888 17.9561 13.554 17.9083C13.5328 17.8793 13.5116 17.8505 13.4908 17.821C13.4573 17.7735 13.4246 17.7251 13.3921 17.6767C13.3709 17.6448 13.3497 17.6127 13.3288 17.5803C13.2982 17.5329 13.2679 17.4852 13.2383 17.4368C13.2154 17.3993 13.193 17.3612 13.1707 17.3231C13.1444 17.2785 13.1179 17.2341 13.0926 17.1887C13.0515 17.1153 13.0116 17.0408 12.9729 16.9655C12.9587 16.9379 12.9449 16.91 12.931 16.8821C12.895 16.8098 12.8597 16.7372 12.8258 16.6633C12.8133 16.6361 12.8015 16.6085 12.7892 16.5812C12.7587 16.5125 12.7288 16.4432 12.7001 16.3732C12.6899 16.3484 12.6799 16.3233 12.67 16.2983C12.6684 16.2945 12.667 16.2907 12.6655 16.2868C12.6388 16.2193 12.6131 16.1511 12.5881 16.0822C12.5762 16.0495 12.5641 16.0169 12.5527 15.9841C12.5247 15.9036 12.4979 15.8224 12.4723 15.7405C12.4585 15.6963 12.4457 15.6517 12.4327 15.6071C12.4193 15.5614 12.4063 15.5154 12.3937 15.4693C12.38 15.4193 12.3663 15.3693 12.3535 15.3191C12.3345 15.2441 12.3165 15.1686 12.2996 15.0926C12.2877 15.0393 12.277 14.9855 12.2661 14.9318C12.2576 14.8896 12.2494 14.8474 12.2415 14.8049C12.2319 14.7529 12.2221 14.701 12.2134 14.6487C12.2 14.5673 12.1877 14.4854 12.1767 14.403C12.1707 14.3586 12.1655 14.3141 12.1601 14.2697C12.1523 14.2039 12.1453 14.1377 12.139 14.0713C12.1359 14.0386 12.1323 14.0059 12.1295 13.9731C12.1215 13.8756 12.1154 13.7774 12.1108 13.6789C12.1094 13.6506 12.1083 13.6222 12.1073 13.5939C12.1033 13.4885 12.1005 13.3828 12.1005 13.2764C12.1005 13.1624 12.1032 13.0492 12.1078 12.9364C12.109 12.9057 12.1111 12.8753 12.1126 12.8448C12.1168 12.7601 12.122 12.6757 12.1287 12.5917C12.1311 12.5625 12.1339 12.5333 12.1365 12.5042C12.1448 12.4133 12.1542 12.3228 12.1654 12.233C12.1675 12.2155 12.1696 12.1979 12.1719 12.1805C12.5057 9.62908 13.9852 7.52657 15.9588 6.6529ZM4.55051 9.37267C4.55051 5.48014 7.19685 2.31324 10.4498 2.31324C12.1472 2.31324 13.7507 3.19743 14.8594 4.68755C12.2857 6.02546 10.5018 8.91838 10.2106 12.298C10.2086 12.3209 10.2072 12.3439 10.2053 12.3669C10.1957 12.4873 10.188 12.6082 10.1822 12.7297C10.1805 12.7667 10.1786 12.8036 10.1771 12.8407C10.1716 12.9854 10.1678 13.1306 10.1678 13.2768C10.1678 13.4243 10.1714 13.5716 10.1772 13.7187C10.1795 13.7779 10.1836 13.8365 10.1868 13.8954C10.1915 13.9801 10.1963 14.0647 10.2029 14.1492C10.2087 14.2242 10.2159 14.2988 10.2232 14.3734C10.2296 14.4384 10.2364 14.5032 10.2439 14.568C10.2538 14.653 10.2644 14.7376 10.2761 14.8219C10.2831 14.872 10.2909 14.922 10.2985 14.9719C10.313 15.0663 10.3278 15.1605 10.3446 15.2538C10.3502 15.2846 10.3566 15.3151 10.3624 15.3457C10.428 15.6931 10.5095 16.0331 10.6065 16.3647C10.6127 16.3861 10.6181 16.4077 10.6244 16.429C10.5661 16.4311 10.5077 16.4321 10.4496 16.4321C7.19685 16.432 4.55051 13.2652 4.55051 9.37267ZM9.1708 24.119C9.14954 24.1591 9.12924 24.1999 9.10837 24.2403C9.0642 24.3256 9.02042 24.4112 8.97808 24.4976C8.95441 24.5459 8.9316 24.5944 8.9086 24.643C8.87052 24.7232 8.83292 24.8035 8.79639 24.8846C8.77338 24.9356 8.75077 24.9869 8.72834 25.0381C8.69316 25.1187 8.65885 25.1998 8.62522 25.2811C8.60405 25.3322 8.58298 25.3832 8.5625 25.4346C8.52828 25.5203 8.49532 25.6067 8.46275 25.6932C8.44507 25.7402 8.4269 25.787 8.40979 25.8343C8.3721 25.9379 8.33614 26.0423 8.30087 26.1471C8.29053 26.1778 8.27951 26.2081 8.26946 26.2387C8.22471 26.3748 8.18189 26.5119 8.1413 26.6496C8.13202 26.6812 8.12371 26.7131 8.11453 26.7447C8.08399 26.8509 8.05422 26.9574 8.0261 27.0644C8.01324 27.1135 8.00135 27.1629 7.98898 27.2122C7.96627 27.3029 7.94394 27.3937 7.92297 27.485C7.9105 27.5394 7.89862 27.5939 7.88673 27.6485C7.86759 27.7361 7.84923 27.824 7.83183 27.9123C7.82072 27.9681 7.80989 28.024 7.79955 28.08C7.78293 28.1694 7.76737 28.2591 7.75239 28.349C7.7434 28.403 7.73412 28.457 7.72571 28.5113C7.71054 28.6091 7.69691 28.7074 7.68367 28.8058C7.67748 28.8521 7.67062 28.8981 7.66482 28.9444C7.64685 29.089 7.63051 29.2339 7.61679 29.3795C7.61659 29.3812 7.6165 29.383 7.6164 29.3847C7.60393 29.5171 7.59321 29.6498 7.58422 29.7829H1.93297V26.8828C1.93297 22.9207 3.83637 19.3636 6.81837 17.673C7.9047 18.3563 9.13959 18.7452 10.4497 18.7452C10.8285 18.7452 11.2085 18.7117 11.5857 18.6453C11.6444 18.7456 11.7042 18.8448 11.766 18.9422C11.7869 18.9749 11.8085 19.0068 11.8298 19.0392C11.8909 19.1327 11.9528 19.2251 12.0168 19.3156C12.043 19.3528 12.0699 19.3891 12.0966 19.4258C12.1565 19.5081 12.2174 19.5894 12.2796 19.6691C12.3123 19.7111 12.3455 19.7524 12.3788 19.7937C12.4357 19.8639 12.4934 19.933 12.5521 20.0011C12.5741 20.0267 12.5949 20.0538 12.6171 20.0791C12.5331 20.1398 12.4499 20.202 12.3675 20.2655C12.354 20.2758 12.3409 20.2867 12.3275 20.2971C12.2451 20.3612 12.1635 20.4266 12.0827 20.4934C12.0548 20.5165 12.027 20.5399 11.9991 20.5632C11.9271 20.624 11.8559 20.6857 11.7852 20.7485C11.7629 20.7684 11.7403 20.7878 11.7182 20.808C11.6283 20.8893 11.5395 20.9721 11.4518 21.0567C11.4327 21.0752 11.4139 21.0943 11.3948 21.1131C11.325 21.1814 11.2559 21.2509 11.1877 21.3215C11.1612 21.3488 11.1349 21.3763 11.1086 21.4039C11.0403 21.476 10.9728 21.5491 10.906 21.6232C10.8886 21.6425 10.8709 21.6615 10.8536 21.6811C10.7716 21.7733 10.6909 21.8674 10.6114 21.963C10.5907 21.9879 10.5705 22.0132 10.55 22.0382C10.4891 22.1126 10.4289 22.1877 10.3694 22.264C10.3459 22.2943 10.3223 22.3246 10.2989 22.3552C10.232 22.4426 10.1661 22.5312 10.1012 22.6211C10.0911 22.6352 10.0806 22.6489 10.0704 22.6631C9.99647 22.7664 9.92418 22.8716 9.85285 22.9779C9.83294 23.0075 9.81352 23.0376 9.7939 23.0675C9.74026 23.1491 9.68739 23.2314 9.63539 23.3146C9.61529 23.3467 9.59509 23.3787 9.57528 23.411C9.50724 23.5221 9.44007 23.634 9.37483 23.7479C9.30476 23.8703 9.23691 23.9942 9.1708 24.119ZM9.48327 33.687V32.0961V30.7869C9.48327 30.6585 9.4853 30.5306 9.48926 30.403C9.49052 30.3611 9.49332 30.3194 9.49506 30.2776C9.49854 30.1924 9.50182 30.1072 9.50704 30.0224C9.51023 29.971 9.51507 29.9199 9.51893 29.8686C9.52454 29.7939 9.52956 29.719 9.53652 29.6448C9.54164 29.5904 9.54831 29.5364 9.55411 29.4822C9.56165 29.4115 9.56871 29.3407 9.5774 29.2704C9.58446 29.2144 9.59296 29.1589 9.6007 29.1032C9.61017 29.0354 9.61896 28.9674 9.62959 28.9C9.63858 28.843 9.64902 28.7865 9.65878 28.7297C9.66999 28.6643 9.68072 28.5986 9.693 28.5336C9.70382 28.4762 9.71619 28.4194 9.72779 28.3623C9.74084 28.2987 9.7533 28.2347 9.76732 28.1715C9.78008 28.114 9.79419 28.0571 9.80772 28C9.82241 27.9379 9.83671 27.8757 9.85237 27.8141C9.86696 27.7567 9.88301 27.6998 9.89837 27.6428C9.9148 27.5823 9.93075 27.5217 9.94805 27.4617C9.96448 27.4049 9.98217 27.3486 9.99937 27.2922C10.0175 27.2328 10.0353 27.1731 10.0544 27.1141C10.0725 27.058 10.0919 27.0026 10.1107 26.9469C10.1305 26.8887 10.15 26.8302 10.1707 26.7725C10.1907 26.7168 10.2118 26.6618 10.2326 26.6067C10.2539 26.5499 10.2751 26.4929 10.2973 26.4367C10.3191 26.3818 10.3419 26.3275 10.3644 26.2731C10.3874 26.2176 10.4101 26.1619 10.4339 26.107C10.4574 26.0529 10.4818 25.9994 10.5061 25.9459C10.5307 25.8916 10.5549 25.8374 10.5802 25.7837C10.6054 25.7305 10.6315 25.6781 10.6573 25.6255C10.6834 25.5725 10.7093 25.5195 10.7362 25.4669C10.763 25.4148 10.7906 25.3634 10.8182 25.3119C10.8458 25.2602 10.8733 25.2085 10.9017 25.1573C10.9301 25.1062 10.9593 25.0558 10.9885 25.0054C11.0176 24.955 11.0466 24.9047 11.0763 24.855C11.1063 24.805 11.1371 24.7558 11.168 24.7064C11.1985 24.6575 11.2289 24.6085 11.2602 24.5603C11.2917 24.5116 11.3239 24.4636 11.3562 24.4155C11.3882 24.3679 11.4203 24.3203 11.453 24.2734C11.4859 24.2262 11.5196 24.1796 11.5532 24.1331C11.5867 24.0867 11.6204 24.0403 11.6547 23.9945C11.689 23.9487 11.7241 23.9036 11.7591 23.8585C11.794 23.8135 11.829 23.7688 11.8647 23.7246C11.9005 23.6802 11.9369 23.6365 11.9734 23.5928C12.0099 23.5492 12.0465 23.5059 12.0836 23.463C12.1206 23.4203 12.1582 23.3782 12.196 23.3362C12.2339 23.2941 12.272 23.2521 12.3105 23.2107C12.349 23.1695 12.3879 23.129 12.427 23.0886C12.4662 23.048 12.5058 23.0076 12.5457 22.9678C12.5854 22.9283 12.6255 22.8893 12.6659 22.8506C12.7066 22.8115 12.7476 22.7727 12.7889 22.7344C12.8298 22.6967 12.8711 22.6595 12.9126 22.6225C12.9547 22.5849 12.9971 22.5478 13.04 22.5111C13.082 22.4751 13.1243 22.4398 13.1669 22.4046C13.2106 22.3686 13.2545 22.3331 13.2988 22.2981C13.3418 22.2641 13.3852 22.2304 13.4288 22.1972C13.4739 22.1629 13.5193 22.129 13.565 22.0957C13.6091 22.0635 13.6535 22.0317 13.6981 22.0005C13.7445 21.968 13.7913 21.936 13.8384 21.9044C13.8835 21.8741 13.9289 21.8441 13.9746 21.8148C14.0225 21.784 14.0707 21.7538 14.1192 21.724C14.1652 21.6956 14.2114 21.6677 14.258 21.6403C14.2946 21.6188 14.3317 21.598 14.3687 21.5771C15.4549 22.2604 16.69 22.6492 18 22.6492C19.31 22.6492 20.545 22.2604 21.6312 21.5771C21.668 21.5979 21.7047 21.6186 21.741 21.6399C21.7882 21.6676 21.8349 21.6959 21.8815 21.7244C21.9294 21.7539 21.9771 21.7838 22.0245 21.8142C22.0707 21.8439 22.1166 21.8742 22.1622 21.9048C22.2087 21.9361 22.2549 21.9676 22.3007 21.9998C22.3461 22.0315 22.391 22.0638 22.4356 22.0964C22.4808 22.1293 22.5255 22.1626 22.57 22.1965C22.6143 22.2302 22.6581 22.2642 22.7017 22.2988C22.7455 22.3334 22.7889 22.3685 22.832 22.404C22.875 22.4395 22.9178 22.4753 22.9603 22.5116C23.0027 22.5479 23.0446 22.5847 23.0864 22.6219C23.1283 22.6592 23.17 22.6967 23.2113 22.7349C23.2522 22.7728 23.2928 22.8112 23.3332 22.85C23.3738 22.889 23.4142 22.9282 23.4542 22.968C23.4939 23.0075 23.5332 23.0476 23.5722 23.088C23.6116 23.1286 23.6507 23.1694 23.6894 23.211C23.7276 23.252 23.7654 23.2936 23.803 23.3354C23.8411 23.3777 23.8791 23.4203 23.9165 23.4634C23.9533 23.5059 23.9896 23.5489 24.0256 23.592C24.0623 23.636 24.0991 23.6801 24.1351 23.7247C24.1705 23.7686 24.2054 23.8131 24.2401 23.8577C24.2754 23.9032 24.3107 23.9487 24.3453 23.9949C24.3793 24.0402 24.4127 24.0861 24.4459 24.1322C24.4799 24.179 24.5138 24.226 24.5469 24.2736C24.5795 24.3202 24.6113 24.3675 24.6431 24.4148C24.6756 24.4632 24.708 24.5114 24.7397 24.5604C24.7709 24.6084 24.8011 24.6571 24.8315 24.7058C24.8624 24.7553 24.8933 24.8049 24.9235 24.8551C24.9532 24.9045 24.982 24.9547 25.0109 25.0048C25.0402 25.0554 25.0696 25.1061 25.0981 25.1574C25.1263 25.2082 25.1536 25.2596 25.181 25.3109C25.2088 25.3629 25.2366 25.4147 25.2636 25.4672C25.2903 25.5191 25.316 25.5718 25.3419 25.6244C25.368 25.6773 25.3943 25.7302 25.4195 25.7837C25.4447 25.8372 25.4689 25.8913 25.4933 25.9452C25.5177 25.999 25.5422 26.0526 25.5657 26.1069C25.5895 26.1617 25.6121 26.2173 25.6351 26.2727C25.6576 26.3272 25.6805 26.3816 25.7023 26.4366C25.7245 26.4928 25.7456 26.5496 25.7668 26.6063C25.7877 26.6617 25.8089 26.7167 25.8289 26.7726C25.8495 26.8298 25.8687 26.8878 25.8884 26.9456C25.9076 27.0018 25.9271 27.0578 25.9453 27.1145C25.9643 27.1731 25.982 27.2324 26 27.2917C26.0173 27.3482 26.035 27.4045 26.0515 27.4616C26.0689 27.5218 26.0849 27.5828 26.1013 27.6435C26.1167 27.7003 26.1327 27.7568 26.1471 27.8141C26.1629 27.8757 26.1771 27.9381 26.1919 28.0002C26.2054 28.0572 26.2195 28.114 26.2323 28.1715C26.2463 28.2347 26.2588 28.2986 26.2718 28.3623C26.2835 28.4193 26.2958 28.4762 26.3066 28.5336C26.3189 28.5986 26.3295 28.6641 26.3408 28.7295C26.3506 28.7863 26.361 28.8428 26.37 28.9C26.3806 28.9668 26.3893 29.0343 26.3987 29.1016C26.4066 29.1579 26.4153 29.2139 26.4223 29.2705C26.431 29.3403 26.438 29.4106 26.4455 29.4807C26.4514 29.5354 26.4582 29.5897 26.4633 29.6447C26.4702 29.7189 26.4753 29.7938 26.4809 29.8685C26.4847 29.9198 26.4896 29.9708 26.4928 30.0223C26.4981 30.1071 26.5013 30.1924 26.5047 30.2777C26.5065 30.3194 26.5093 30.3611 26.5105 30.4029C26.5145 30.5305 26.5165 30.6584 26.5165 30.7868V32.0959V33.687H9.48327ZM28.4162 29.7829C28.3972 29.5012 28.37 29.2211 28.3354 28.9429C28.3299 28.8988 28.3233 28.8551 28.3174 28.8111C28.304 28.7104 28.2899 28.6099 28.2744 28.5097C28.2662 28.457 28.2572 28.4045 28.2484 28.3519C28.2332 28.2604 28.2174 28.1691 28.2004 28.0782C28.1902 28.0234 28.1796 27.9686 28.1687 27.914C28.1511 27.8247 28.1325 27.7358 28.1132 27.6471C28.1015 27.5933 28.0898 27.5396 28.0774 27.486C28.0563 27.3937 28.0336 27.3018 28.0106 27.2101C27.9985 27.1618 27.9869 27.1133 27.9742 27.0651C27.9457 26.9565 27.9155 26.8485 27.8845 26.7407C27.8758 26.7106 27.8679 26.6802 27.859 26.6501C27.8182 26.5119 27.7754 26.3745 27.7304 26.2379C27.7208 26.2086 27.7102 26.1797 27.7004 26.1505C27.6647 26.0444 27.6282 25.9386 27.59 25.8336C27.5731 25.787 27.5552 25.7409 27.5378 25.6946C27.505 25.6071 27.4717 25.52 27.4371 25.4335C27.4169 25.3829 27.396 25.3326 27.3753 25.2822C27.3413 25.2001 27.3066 25.1184 27.2712 25.0371C27.2489 24.9862 27.2266 24.9355 27.2038 24.885C27.1671 24.8037 27.1294 24.7229 27.0911 24.6424C27.0681 24.5941 27.0454 24.5457 27.0219 24.4977C26.9794 24.4109 26.9354 24.325 26.891 24.2391C26.8703 24.1991 26.8502 24.1588 26.8291 24.1191C26.7629 23.9943 26.695 23.8704 26.6249 23.7479C26.5595 23.6339 26.4924 23.522 26.4243 23.4109C26.4046 23.3788 26.3845 23.347 26.3646 23.315C26.3123 23.2314 26.2593 23.1488 26.2054 23.067C26.186 23.0375 26.1668 23.0076 26.1471 22.9784C26.0756 22.8717 26.003 22.7663 25.9289 22.6627C25.9193 22.6493 25.9093 22.6363 25.8996 22.6228C25.8343 22.5323 25.7678 22.443 25.7004 22.3549C25.6772 22.3246 25.6539 22.2946 25.6306 22.2645C25.5708 22.1879 25.5102 22.1121 25.449 22.0374C25.4288 22.0128 25.4089 21.9879 25.3886 21.9635C25.3088 21.8677 25.2278 21.7733 25.1457 21.6808C25.1288 21.6617 25.1114 21.6432 25.0944 21.6243C25.0272 21.5497 24.9593 21.4762 24.8907 21.4038C24.8646 21.3763 24.8383 21.349 24.812 21.3217C24.7436 21.251 24.6745 21.1815 24.6046 21.1131C24.5856 21.0944 24.5669 21.0754 24.5478 21.0569C24.4602 20.9722 24.3714 20.8894 24.2816 20.8082C24.2592 20.788 24.2364 20.7683 24.2139 20.7483C24.1435 20.6858 24.0727 20.6243 24.001 20.5639C23.9728 20.5402 23.9447 20.5166 23.9165 20.4933C23.8365 20.4272 23.7558 20.3625 23.6742 20.2991C23.6599 20.288 23.6459 20.2764 23.6316 20.2654C23.5492 20.2022 23.4663 20.14 23.3824 20.0794C23.4041 20.0548 23.4244 20.0286 23.4457 20.0036C23.5056 19.9342 23.5645 19.8636 23.6225 19.7919C23.6549 19.7519 23.6871 19.7118 23.7188 19.6711C23.7821 19.5901 23.8437 19.5075 23.9046 19.4239C23.9305 19.3884 23.9565 19.3531 23.9819 19.317C24.0468 19.2252 24.1098 19.1314 24.1717 19.0365C24.192 19.0055 24.2128 18.9749 24.2327 18.9436C24.2949 18.8459 24.3549 18.7462 24.4139 18.6455C24.7911 18.7118 25.1711 18.7453 25.55 18.7453C26.86 18.7453 28.095 18.3565 29.1812 17.6731C32.1633 19.3638 34.0666 22.9208 34.0666 26.8829V29.7829H28.4162Z"
          fill={color}
        />
      </Symbol>

      <Symbol id="Статистика" viewBox="0 0 36 36">
        <Rect x="27" y="1" width="8" height="8" rx="1" stroke={color} strokeWidth="2" />
        <Rect x="1" y="27" width="8" height="8" rx="1" stroke={color} strokeWidth="2" />
        <Rect x="14" y="27" width="8" height="8" rx="1" stroke={color} strokeWidth="2" />
        <Rect x="27" y="27" width="8" height="8" rx="1" stroke={color} strokeWidth="2" />
        <Rect x="1" y="14" width="8" height="8" rx="1" stroke={color} strokeWidth="2" />
        <Rect x="14" y="14" width="8" height="8" rx="1" stroke={color} strokeWidth="2" />
        <Rect x="27" y="14" width="8" height="8" rx="1" stroke={color} strokeWidth="2" />
        <Rect x="1" y="1" width="8" height="8" rx="1" stroke={color} strokeWidth="2" />
        <Rect x="14" y="1" width="8" height="8" rx="1" stroke={color} strokeWidth="2" />
      </Symbol>

      <Use href={`#${name}`} x={0} y={0} width="100%" height="100%" />
    </Svg>
  );
}