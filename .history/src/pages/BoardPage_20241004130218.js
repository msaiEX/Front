import React from 'react'
import { Text } from '@chakra-ui/react'
import BoradCard from '../components/BoradCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const BoardPage = () => {
  return (
    <div className='w-[1140px] h-[calc(100vh-80px)] flex flex-col py-10 px-10'>
      <Text fontSize='xl'>04</Text>
      <Text fontSize='3xl'>오늘의 핫한 게시판</Text>
      <Text fontSize='xl'>사람들과 외환에 대해서 이야기를 나눠 보세요.</Text>
      <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          style={{ padding:"10px" }}
        >
          <SwiperSlide
            style={{
              width: "250px",
              height: "310px",
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
            <BoradCard title={"원달러 투자자들 모여라"} content={"원달러 투자자끼리 정보 공유하는 모임"} />
          </SwiperSlide>
          <SwiperSlide
            style={{
              width: "250px",
              height: "310px",
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
            <BoradCard title={"원달러 투자자들 모여라"} content={"원달러 투자자끼리 정보 공유하는 모임"} />
          </SwiperSlide>
          <SwiperSlide
            style={{
              width: "250px",
              height: "310px",
              boxShadow: "0 3px 13px rgba(0, 0, 0, 0.2)", // drop-shadow 추가
              borderRadius: "15px", // rounded 효과 추가 (15px로 설정)
              padding: "20px",
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
            <BoradCard title={"초보자들만 오세요"} content={"초보투자자 끼지 정보 공유해요!"} />
          </SwiperSlide>
          <SwiperSlide
            style={{
              width: "250px",
              height: "310px",
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
            <BoradCard title={"엔과련 전문 게시판"} content={"엔 투자자들 끼리 정보공유합시다."} />
          </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default BoardPage
