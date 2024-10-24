export const imageMapper = [
  {
    name: "긍정",
    image: "/image/positive.png"
  },
  {
    name: "부정",
    image: "/image/negative.png",
  }
];

export const imageMapperFunction = (semantic) => {
  if(semantic === "긍정") {
    return imageMapper[0];
  } else {
    return imageMapper[1];  
  }
}