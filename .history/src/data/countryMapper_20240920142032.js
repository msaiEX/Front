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
    image: "/image/monglogia_flag.png",
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
  }


];

export const countryMapperFunction = (state) => {
  if(state === "USD") {
    return imageMapper[0];
  } else if (state === "JPY") {
    return imageMapper[1];
  } else if (state === "EU") {
    return imageMapper[2];
  }
}