export const imageMapper = [
  {
    name: "USD",
    image: process.env.PUBLIC_URL + "/image/usd_flag.png"
  },
  {
    name: "JPY",
    image: process.env.PUBLIC_URL + "/image/jpy_flag.png",
  },
  {
    name: "EUR",
    image: process.env.PUBLIC_URL + "/image/eu_flag.png",
  },
  {
    name: "THB",
    image: process.env.PUBLIC_URL + "/image/thailand_flag.png",
  },
  {
    name: "HKD",
    image: process.env.PUBLIC_URL + "/image/hongkong_flag.png",
  },
  {
    name: "SGD",
    image: process.env.PUBLIC_URL + "/image/singapore_flag.png",
  },
  {
    name: "IDR",
    image: process.env.PUBLIC_URL + "/image/indonesia_flag.png",
  },
  {
    name: "CNY",
    image: process.env.PUBLIC_URL + "/image/china_flag.png",
  },
  {
    name: "CAD",
    image: process.env.PUBLIC_URL + "/image/canada_flag.png",
  },
  {
    name: "PHP",
    image: process.env.PUBLIC_URL + "/image/philippines_flag.png",
  },
  {
    name: "TWD",
    image: process.env.PUBLIC_URL + "/image/taiwan_flag.png",
  },
  {
    name: "AUD",
    image: process.env.PUBLIC_URL + "/image/australia_flag.png",
  },
  {
    name: "VND",
    image: process.env.PUBLIC_URL + "/image/vietnam_flag.png",
  },
  {
    name: "GBP",
    image: process.env.PUBLIC_URL + "/image/unitedkingdom_flag.png",
  },
  {
    name: "MYR",
    image: process.env.PUBLIC_URL + "/image/malaysia_flag.png",
  },
  {
    name: "RUB",
    image: process.env.PUBLIC_URL + "/image/russia_flag.png",
  },
  {
    name: "MXN",
    image: process.env.PUBLIC_URL + "/image/mexico_flag.png",
  },
  {
    name: "MNT",
    image: process.env.PUBLIC_URL + "/image/MNT_flag.png",
  },
  {
    name: "BRL",
    image: process.env.PUBLIC_URL + "/image/brazil_flag.png",
  },
  {
    name: "AEI",
    image: process.env.PUBLIC_URL + "/image/arabemirate_flag.png",
  },
  {
    name: "MOP",
    image: process.env.PUBLIC_URL + "/image/macao_flag.png",
  },
  {
    name: "NOK",
    image: process.env.PUBLIC_URL + "/image/norway_flag.png",
  },
  {
    name: "INR",
    image: process.env.PUBLIC_URL + "/image/india_flag.png",
  },
  {
    name : "ZAR",
    image: process.env.PUBLIC_URL + "/image/ZAR_flag.png",
  },
  {
    name : "NZD",
    image: process.env.PUBLIC_URL + "/image/NZD_flag.png",
  },
  {
    name : "BHD",
    image: process.env.PUBLIC_URL + "/image/BHD_flag.png",
  },
  {
    name : "BDT",
    image: process.env.PUBLIC_URL + "/image/BDT_flag.png",
  },
  {
    name : "DKK",
    image : process.env.PUBLIC_URL + "/image/DKK_flag.png",
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
    case "DKK":
      return imageMapper[27];
    default:
      return null; // 기본적으로 없을 경우 null 반환
  }
};
