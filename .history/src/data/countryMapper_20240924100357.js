export const imageMapper = [
  {
    name: "USD",
    image: "/image/usd_flag.png"
  },
  {
    name: "JPY",
    image: "/image/jpy_flag.png",
  },
  {
    name: "EUR",
    image: "/image/eu_flag.png",
  },
  {
    name: "THB",
    image: "/image/thailand_flag.png",
  },
  {
    name: "HKD",
    image: "/image/hongkong_flag.png",
  },
  {
    name: "SGD",
    image: "/image/singapore_flag.png",
  },
  {
    name: "IDR",
    image: "/image/indonesia_flag.png",
  },
  {
    name: "CNY",
    image: "/image/china_flag.png",
  },
  {
    name: "CAD",
    image: "/image/canada_flag.png",
  },
  {
    name: "PHP",
    image: "/image/philippines_flag.png",
  },
  {
    name: "TWD",
    image: "/image/taiwan_flag.png",
  },
  {
    name: "AUD",
    image: "/image/australia_flag.png",
  },
  {
    name: "VND",
    image: "/image/vietnam_flag.png",
  },
  {
    name: "GBP",
    image: "/image/unitedkingdom_flag.png",
  },
  {
    name: "MYR",
    image: "/image/malaysia_flag.png",
  },
  {
    name: "RUB",
    image: "/image/russia_flag.png",
  },
  {
    name: "MXN",
    image: "/image/mexico_flag.png",
  },
  {
    name: "MNT",
    image: "/image/MNT_flag.png",
  },
  {
    name: "BRL",
    image: "/image/brazil_flag.png",
  },
  {
    name: "AEI",
    image: "/image/arabemirate_flag.png",
  },
  {
    name: "MOP",
    image: "/image/macao_flag.png",
  },
  {
    name: "NOK",
    image: "/image/norway_flag.png",
  },
  {
    name: "INR",
    image: "/image/india_flag.png",
  },
  {
    name : "ZAR",
    image: "/image/ZAR_flag.png",
  },
  {
    name : "NZD",
    image: "/image/NZD_flag.png",
  },
  {
    name : "BHD",
    image: "/image/BHD_flag.png",
  },
  {
    name : "BDT",
    image: "/image/BDT_flag.png",
  }
];

export const countryMapperFunction = (state) => {
  switch(state) {
    case "USD":
      return imageMapper[0];
    case "JPY":
      return imageMapper[1];
    case "EUR":
      return imageMapper[2];
    case "THB":
      return imageMapper[3];
    case "HKD":
      return imageMapper[4];
    case "SGD":
      return imageMapper[5];
    case "IDR":
      return imageMapper[6];
    case "CNY":
      return imageMapper[7];
    case "CAD":
      return imageMapper[8];
    case "PHP":
      return imageMapper[9];
    case "TWD":
      return imageMapper[10];
    case "AUD":
      return imageMapper[11];
    case "VND":
      return imageMapper[12];
    case "GBP":
      return imageMapper[13];
    case "MYR":
      return imageMapper[14];
    case "RUB":
      return imageMapper[15];
    case "MXN":
      return imageMapper[16];
    case "MNT":
      return imageMapper[17];
    case "BRL":
      return imageMapper[18];
    case "AEI":
      return imageMapper[19];
    case "MOP":
      return imageMapper[20];
    case "NOK":
      return imageMapper[21];
    case "INR":
      return imageMapper[22];
    case "ZAR":
      return imageMapper[23];
    case "NZD":
      return imageMapper[24];
    case "BHD":
      return imageMapper[25];
    case "BDT":
      return imageMapper[26];
    default:
      return null; // 기본적으로 없을 경우 null 반환
  }
};
