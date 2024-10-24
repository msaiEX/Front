import React from "react";
import { Text } from "@chakra-ui/react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
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
    @keyframes arrowBounce {
      0%, 100% {
        transform: translateY(0);
        opacity: 1;
      }
      50% {
        transform: translateY(0.5rem);
        opacity: 0.3;
      }
    }
  `;

  return (
    <div className="relative">
      {/* 배경 이미지 */}
      <img
        className="fixed w-full h-screen -z-10"
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
      <div className='absolute w-full h-screen flex items-center justify-center z-100'>
        <Text className='text-white font-bold text-[60px]'>Hana Easy Foreign Exchange</Text>
      </div>
      {/* 마우스 애니메이션 */}
      {/* <div className="absolute z-100 top-[800px] left-1/2"> */}
      <div className="absolute z-100 w-full h-screen flex flex-col justify-end items-center">
        <div>
          <div
            className="relative block mx-auto border-2 border-white rounded-full w-5 h-8 box-border"
            name="mouse"
          >
            <div
              className="absolute left-[calc(50%-2px)] transform -translate-x-1/2 top-[11%] w-[3px] h-[5px] bg-white rounded-full"
              style={wheelAnimation}
              name="wheel"
            ></div>
          </div>
          <Text className="text-white mt-3">SCROLL DOWN</Text>
          <MdOutlineKeyboardArrowDown
            size={23}
            className="text-white w-full flex justify-center"
            style={{
              animation: "arrowBounce 2s ease-in-out infinite",
            }}
          />
        </div>
        <div className='w-[34px]'>
          a
        </div>
      </div>
      <div className='w-full h-screen'></div>
      <div className='w-full flex justify-center mt-[100px]'>
        <Text className='text-white font-bold text-[32px]'>OUR SERVICE</Text>
      </div>
      <div className='w-[200px] h-[50000px] bg-white'>

      </div>

      {/* 컨텐츠 */}
      {/* <div className="absolute z-100 text-slate-50 w-full">content</div> */}

      {/* 애니메이션 스타일 추가 */}
      <style>{keyframesStyle}</style>
    </div>
  );
};

export default HomePage;
