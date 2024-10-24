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
import { Pagination, Autoplay } from "swiper/modules";
import axios from "axios";
import styled from "styled-components";

import "swiper/css";
import "../css/style.css";
import "swiper/css/pagination";

import ToggleSwitch from "../components/Toggle";
import { countryMapperFunction, imageMapper } from "../data/countryMapper";

const SwiperContainer = styled.div`
  .swiper-pagination {
    display: none; // Pagination 숨기기
  }
  .swiper-pagination {
    position: relative;
    bottom: 10px;
    text-align: center;
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    margin: 0 5px;
    display: inline-block;
    background: white;
    border-radius: 50%;
    opacity: 0.7;
    cursor: pointer;

    &.swiper-pagination-bullet-active {
      background: #ff0000;
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

  function truncateText(text, maxLength = 40) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }

  // For Korean News
  const filteredDataKoreaNews = consumData.filter((data) => {
    return selected
      ? data.result === "호재" &&
          data.state === selectedCurrency &&
          data.source === "KOREA"
      : data.result === "악재" &&
          data.state === selectedCurrency &&
          data.source === "KOREA";
  });

  // For Local News
  const filteredDataLocalNews = consumData.filter((data) => {
    return selected
      ? data.result === "호재" &&
          data.state === selectedCurrency &&
          data.source === selectedCurrency
      : data.result === "악재" &&
          data.state === selectedCurrency &&
          data.source === selectedCurrency;
  });

  // 불러올 이미지를 이미지 매퍼에서 가져옴
  const flagImages = imageMapper.map((item) => ({
    src: item.image,
    alt: item.name,
    name: item.name,
  }));
  console.log(flagImages);
  // 특정 통화를 클릭했을 때 호출되는 함수
  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency); // 선택한 통화로 상태 업데이트
  };

  if (!isLoading) return <div>로딩중입니다.</div>;

  return (
    <SwiperContainer>
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
        <div className="flex mt-3">
          {/* 한국 뉴스 */}
          <div>
            <Text className="px-2 text-lg font-semibold">한국뉴스</Text>
            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 1000, // 3초마다 자동으로 넘김
                disableOnInteraction: True,
              }}
              style={{ width: "550px", padding: "10px" }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {filteredDataKoreaNews.map((data, index) => (
                <SwiperSlide
                  key={index}
                  style={{
                    width: "250px",
                    height: "300px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                    borderRadius: "15px",
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
          </div>

          {/* 현지 뉴스 */}
          <div>
            <Text className="px-2 text-lg font-semibold">현지뉴스</Text>
            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              style={{ width: "550px", padding: "10px" }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {filteredDataLocalNews.map((data, index) => (
                <SwiperSlide
                  key={index}
                  style={{
                    width: "250px",
                    height: "300px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                    borderRadius: "15px",
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
          </div>
        </div>
        <div className="flex justify-center items-center gap-1">
          <ToggleSwitch
            selected={selected}
            handleToggle={handleToggle}
            direction={"center"}
          />
          <Popover placement="top">
            <PopoverTrigger>
              <Image
                className="p-1 bg-green-200 rounded-full w-[42px] h-[42px] mt-3 cursor-pointer"
                src={countryMapperFunction(selectedCurrency).image}
                alt={`${selectedCurrency} Flag`}
              />
            </PopoverTrigger>
            <PopoverContent w="230px">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>국가 선택</PopoverHeader>
              <PopoverBody>
                <div className="flex gap-2">
                  {flagImages
                    .filter((img) =>
                      ["USD", "JPY", "CNY", "EUR", "TWD"].includes(img.name)
                    ) // 해당 통화만 필터링
                    .map((img, index) => (
                      <Image
                        key={index}
                        className="w-[32px] h-[32px] cursor-pointer"
                        src={img.src}
                        alt={img.name}
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
