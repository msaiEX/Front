import React, { useEffect, useState } from "react";
import {
  Text,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverHeader,
} from "@chakra-ui/react";
import NewsCard from "../components/NewsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import axios from "axios";
import styled from "styled-components"; // styled-components 임포트

import "swiper/css";
import "../css/style.css";
import "swiper/css/pagination";

import ToggleSwitch from "../components/Toggle";
import { countryMapperFunction, imageMapper } from "../data/countryMapper";

const SwiperContainer = styled.div`
  .swiper-pagination {
    position: relative;
    bottom: 10px; /* 원하는 위치로 변경 */
    text-align: center;
  }

  .swiper-pagination-bullet {
    width: 12px; /* 기본 bullet 크기 */
    height: 12px; /* 기본 bullet 크기 */
    margin: 0 5px;
    display: inline-block; /* bullet이 인라인으로 표시되도록 */
    background: white; /* 기본 색상 설정 */
    border-radius: 50%; /* 둥근 모양 */
    opacity: 0.7;
    cursor: pointer;

    &.swiper-pagination-bullet-active {
      background: #ff0000; /* 활성화된 페이지네이션 색상 */
    }
  }
`;
const NewsPage = () => {
  const [consumData, setConsumData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState(true);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  useEffect(() => {
    const getUseHistory = async () => {
      try {
        const result = await axios.get("http://localhost:8081/api/news");
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

  const handleToggle = () => {
    setSelected(!selected);
  };

  function truncateText(text, maxLength = 60) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }

  const filteredData = consumData.filter((data) => {
    return selected ? data.result === "호재" : data.result === "악재";
  });

  if (!isLoading) return <div>로딩중입니다.</div>;

  // 불러올 이미지를 이미지 매퍼에서 가져옴
  const flagImages = imageMapper.map((item) => ({
    src: item.image,
    alt: `${item.name} Flag`,
  }));

  // 특정 통화를 클릭했을 때 호출되는 함수
  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency); // 선택한 통화로 상태 업데이트
  };

  console.log(selectedCurrency)

  return (
    <SwiperContainer>
      {" "}
      {/* SwiperContainer로 감싸서 pagination 스타일 적용 */}
      <div className="w-[1140px] h-[calc(100vh-80px)] flex flex-col py-10 px-10">
        <Text className="font-semibold mr-2" fontSize="xl">
          02
        </Text>
        <div className="flex items-center">
          <Text className="font-semibold mr-2" fontSize="3xl">
            오늘의 환율 소식
          </Text>
          <Image
            className="h-[32px] w-[32px]"
            src="./image/news2_imoji.png"
          ></Image>
        </div>
        <Text fontSize="xl">
          외환 전문 AI를 통해 글로벌 외환 소식을 쉽게 접해보세요.
        </Text>

        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          style={{ width: "1100px", padding: "10px" }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {filteredData.map((data, index) => (
            <SwiperSlide
              key={index} // key는 여기에
              style={{
                width: "250px",
                height: "310px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // drop-shadow 추가
                borderRadius: "15px", // rounded 효과 추가 (15px로 설정)
                padding: "20px",
              }}
            >
              <NewsCard
                url={data.url}
                state={data.state}
                title={data.title}
                content={truncateText(data.content)}
                image_url={data.imageUrl}
                result={data.result}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center items-center gap-1">
          <ToggleSwitch
            selected={selected}
            handleToggle={handleToggle}
            direction={"center"}
          />
          <Popover placement="top">
            <PopoverTrigger>
              <Image
                className="p-1 bg-green-400 rounded-full w-[42px] h-[42px] mt-3 cursor-pointer"
                src='/image/usd_flag.png'// 선택된 통화에 맞는 이미지
                alt={`${selectedCurrency} Flag`}
              />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>국가 선택</PopoverHeader>
              <PopoverBody>
                <div className="flex gap-2">
                  {flagImages.map((img, index) => (
                    <Image
                      key={index}
                      className="w-[32x] h-[32px] cursor-pointer"
                      src={img.src}
                      alt={img.alt}
                      onClick={() => handleCurrencyChange(img.name)}
                    />
                  ))}
                </div>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </SwiperContainer>
  );
};

export default NewsPage;
