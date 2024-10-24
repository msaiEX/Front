import React from "react";
import { Text, Image } from '@chakra-ui/react';
import { FaRegStar, FaStar } from "react-icons/fa";  // FaStar는 선택된 상태
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";  // up, down 아이콘
import { countryMapperFunction } from '../data/countryMapper'

const WorldExInfo = ({ currency, baseRate, remitSend, remitReceive, updownRate, isSelected }) => {
  // currency에서 국가 코드를 추출하는 함수
  const extractCurrencyCode = (currency) => {
    const match = currency.match(/[A-Z]{3}/);  // 대문자 3자리 추출 (예: USD, JPY 등)
    return match ? match[0] : null;
  };

  // currency에서 국가 코드를 추출
  const currencyCode = extractCurrencyCode(currency);

  // 추출한 국가 코드로 이미지를 매핑
  const countryInfo = countryMapperFunction(currencyCode);

  // updownRate가 양수인지 음수인지 판단
  const isRatePositive = parseFloat(updownRate) > 0;

  return (
    <div className="w-full text-center flex mb-2 py-2 rounded-full" style={{boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", animation: "fadeIn 0.5s ease-in-out"}}>
      <div className="w-[26%] flex gap-1 justify-start items-center px-3">

        {/* 선택 여부에 따라 별 모양과 색상 변경 */}
        {isSelected ? <FaStar size={24} color="orange" /> : <FaRegStar size={24} color="gray"/>}
        
        {/* 국가 코드로 이미지를 매핑하여 보여줌 */}
        {countryInfo && (
          <Image
            className="h-[24px] w-[24px]"
            src={countryInfo.image}
            alt={currencyCode}
          />
        )}
        <Text className='font-semibold'>{currency}</Text>
      </div>
      <Text className="w-[18%] font-bold py-2">{baseRate}</Text>
      <Text className="w-[18%] font-bold py-2">{remitSend}</Text>
      <Text className="w-[18%] font-bold py-2">{remitReceive}</Text>
      <div className="w-[20%] flex p-1 justify-center items-center">
        {/* updownRate가 양수일 때와 음수일 때 다른 스타일 적용 */}
        <div className={`flex w-[84px] items-center ${isRatePositive ? 'bg-red-500' : 'bg-blue-500'} py-1 pl-2 rounded-sm`}>
          {isRatePositive ? (
            <IoMdArrowDropup color='#FFAAAA' />
          ) : (
            <IoMdArrowDropdown color='blue' />
          )}
          <Text className='text-white text-sm'>{updownRate}%</Text>
        </div>
      </div>
    </div>
  );
};

export default WorldExInfo;
