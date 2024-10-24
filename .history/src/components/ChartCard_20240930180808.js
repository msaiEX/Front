import React, { useState } from "react";
import { ResponsiveContainer, Area, Tooltip, AreaChart, YAxis } from "recharts";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Box,
  Image,
  HStack,
  Text,
} from "@chakra-ui/react";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { countryMapperFunction } from "../data/countryMapper";
const ChartCard = ({
  index,
  name,
  increase,
  imageUrl,
  currentPrice,
  date,
  chartData,
}) => {
  const [heart, setHeart] = useState(false);
  const handleHeart = () => {
    setHeart(!heart);
  };
  console.log(name);
  return (
    <div
      name="card-container"
      className="w-[250px] h-[300px] px-8 py-4 bg-slate-50 rounded-2xl hover:transform hover:scale-95 hover:border hover:border-green-300 transition-all duration-300 ease-in-out"
      style={{
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        animation: "fadeIn 0.5s ease-in-out",
      }}
    >
      {/* card 원달러 이미지 */}
      <div className="flex justify-between items-center">
        <HStack>
          <div className="flex gap-1">
            <Text className="font-semibold">{index}.</Text>
            <Text as={"b"} fontSize="1xl">
              {name}
            </Text>
          </div>

          <Box className="w-[24px] h-[24px]">
            <Image src={countryMapperFunction(name).image} alt="flag" />
          </Box>
        </HStack>

        <div onClick={handleHeart}>
          {heart ? (
            <AiFillHeart className="text-lg text-red-700" />
          ) : (
            <AiOutlineHeart className="text-lg" />
          )}
        </div>
      </div>

      {/* card 차트 */}
      <ResponsiveContainer width="100%" height="45%">
        <AreaChart width={300} height={100} data={chartData}>
          <defs>
            <linearGradient
              id={`colorPv-${increase >= 0 ? "positive" : "negative"}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor={increase >= 0 ? "#FF0000" : "#524CFF"}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={increase >= 0 ? "#FF0000" : "#524CFF"}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Tooltip />
          {/* YAxis 추가 및 범위 설정 */}
          <YAxis domain={["dataMin - 10", "dataMax + 10"]} hide={true} />
          <Area
            type="monotone"
            dataKey="uv"
            stroke={increase >= 0 ? "#FF0000" : "#524CFF"}
            fillOpacity={2}
            fill={`url(#colorPv-${increase >= 0 ? "positive" : "negative"})`}
          />
        </AreaChart>
      </ResponsiveContainer>

      <div name="card-foot" className="flex justify-end">
        <Stat>
          <StatLabel className="flex justify-end">전일대비</StatLabel>
          <StatHelpText
            lineHeight={1}
            className="flex justify-end items-center"
          >
            <StatArrow type={increase >= 0 ? "increase" : "decrease"} />
            <StatNumber>{increase + "%"}</StatNumber>
          </StatHelpText>
        </Stat>
      </div>
      <div className="flex justify-between">
        <Text fontSize="sm" lineHeight={1.2} className="text-slate-500">
          현재가
        </Text>
        <Text fontSize="sm" lineHeight={1.2} className="text-slate-500">
          {currentPrice + "원"}
        </Text>
      </div>
      <div className=" flex justify-between">
        <Text fontSize="sm" lineHeight={1.2} className="text-slate-500">
          기준일
        </Text>
        <Text fontSize="sm" lineHeight={1.2} className="text-slate-500">
          {date}
        </Text>
      </div>
      <Link
        to={`/MainPageDetail/${name}`}
        state={{ increase: increase }}
        className="text-sm font-bold flex justify-end text-slate-500 py-2"
      >
        자세한 분석 보러가기
      </Link>
    </div>
  );
};

export default ChartCard;
