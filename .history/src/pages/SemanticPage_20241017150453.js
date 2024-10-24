import React, { useState, useEffect } from "react";
import { Text, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import axios from "axios";

import "swiper/css";
import "../css/style.css";
import "swiper/css/pagination";

import ToggleSwitch from "../components/Toggle";
import SementicCard from "../components/SementicCard";

import { imageMapperFunction } from "../data/imageMapper";
import { countryMapperFunction } from "../data/countryMapper";
import styled from "styled-components";

const SwiperContainer = styled.div`
  .swiper-pagination {
    display: none; // Pagination 숨기기
  }
`;
const SemanticPage = () => {
  const [consumData, setConsumData] = useState([]);
  const [selected, setSelected] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleToggle = () => {
    setSelected(!selected);
  };

  useEffect(() => {
    const getUseHistory = async () => {
      try {
        const result = await axios.get("http://34.22.76.4:8081/api/sentiment");
        console.log(result.data);
        setConsumData(result.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(true);
      }
    };
    getUseHistory();
  }, []);

  // selected 값에 따라 데이터를 필터링
  const filteredData = consumData.filter((data) => {
    return selected ? data.semantic === "긍정" : data.semantic === "부정";
  });

  if (!isLoading) return <div>로딩중입니다.</div>;

  return (
    <SwiperContainer>
    <div className="w-[1140px] h-[calc(100vh-80px)] flex py-10 px-10">
      <div className="w-[400px]">
        <Text className="font-semibold mr-2" fontSize="xl">
          03
        </Text>
        <div className="flex items-center">
          <Text className="font-semibold mr-2" fontSize="3xl">
            오늘의 환율 온도
          </Text>
          <Image
            className="h-[38px] w-[38px]"
            src={process.env.PUBLIC_URL +"./image/tmp_imoji.png"}
          ></Image>
        </div>
        <Text fontSize="xl">AI가 분석한 환율을 보세요.</Text>
        <div className="h-2"></div>
        <ToggleSwitch
          selected={selected}
          handleToggle={handleToggle}
          direction={"start"}
        />
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{ padding:"10px" }}
      >
        {filteredData.map((data, index) => (
          <SwiperSlide
            style={{
              width: "300px",
              height: "450px",
              boxShadow: "0 3px 13px rgba(0, 0, 0, 0.2)", // drop-shadow 추가
              borderRadius: "15px", // rounded 효과 추가 (15px로 설정)
              padding: "20px",
              transition: "all 0.3s ease-in-out",
              border: "1px solid transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(0.95)";
              e.currentTarget.style.border = "1px solid #32CD32";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.border = "1px solid transparent";
            }}
          >
            <SementicCard
              key={index}
              name={data.state}
              imageUrl={countryMapperFunction(data.state).image}
              faceUrl={imageMapperFunction(data.semantic).image}
              semantic={data.semantic}
              persent={data.positive}
              positive={data.positive}
              negative={data.nagative}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </SwiperContainer>
  );
};

export default SemanticPage;
