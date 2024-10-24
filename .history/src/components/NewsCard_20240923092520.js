import React from "react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NewsCard = ({ state, url, title, content, image_url, result }) => {
  return (
    <Link
       to={"/NewsPageDetail/" + encodeURIComponent(url)}
       name="card-container"
     >
      <img
        src={image_url}
        alt="News Image"
        className="object-cover rounded-2xl w-full h-[120px]"
      />
      <div name="text-box" className="flex flex-col items-center">
        <Text
          lineHeight={1}
          className="text leading-0 grow py-2"
        >
          {title}
        </Text>
        <Text
          fontSize={"sm"}
          lineHeight={1}
          className="h-[42px] grow text-center text-slate-600" 
        >
          {content}
        </Text>
        <div className="w-full flex justify-end items-center pb-4 px-3">
          <Text fontSize={"xl"} as={"b"} className="my-2 grow text-red-500">
            {result}
          </Text>
        </div>
      </div>
    </Link>

  );
};

export default NewsCard;