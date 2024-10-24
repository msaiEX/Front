import React from "react";
import { Text } from "@chakra-ui/react";

const HomePage = () => {
  const wheelAnimation = {
    animation: "wheel 2.5s ease-in-out infinite",
  };

  const keyframesStyle = `
    @keyframes wheel {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(0.5rem);
      }
    }
  `;

  return (
    <div className="relative">
      {/* 배경 이미지 */}
      <img
        className="fixed w-full h-screen"
        src={process.env.PUBLIC_URL + "/image/homepage_bg.jpg"}
        alt=""
      />
      {/* 어두운 오버레이 */}
      <div className="fixed w-full h-screen bg-black opacity-30 top-0 left-0"></div>
      {/* 로고 */}
      <div className="absolute z-100 flex items-center p-10">
        <img
          src={process.env.PUBLIC_URL + "/image/hanalogo_white.png"}
          alt=""
        />
        <img
          className="h-[24px]"
          src={process.env.PUBLIC_URL + "/image/hanaEx_logo_white.png"}
          alt=""
        />
      </div>

      {/* 마우스 애니메이션 */}
      <div className='absolute z-100 top-[800px]'>
        <div
          className="block mx-auto border-2 border-white rounded-full w-5 h-8 box-border"
          name="mouse"
        >
          <div
            className="absolute left-1/2 transform -translate-x-1/2 top-[15%] w-[3px] h-[5px] bg-white rounded-full"
            style={wheelAnimation}
            name="wheel"
          ></div>
        </div>
        <Text className='text-white mt-3'>SCROLL DOWN</Text>
      </div>

      {/* 컨텐츠 */}
      {/* <div className="absolute z-100 text-slate-50 w-full">content</div> */}

      {/* 애니메이션 스타일 추가 */}
      <style>{keyframesStyle}</style>
    </div>
  );
};

export default HomePage;
