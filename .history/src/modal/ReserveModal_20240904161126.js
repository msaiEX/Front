// ReserveMadal
import React from 'react'
import {
  ModalContent,
  Text,
  Image,
  ModalCloseButton,
  Button
} from "@chakra-ui/react";
const ReserveModal = ({
  onClose,
  onPurchaseClick,
  value,
  exchangeValue,
  calculatedValue,
  currentInvestPrice,
  currentSellPrice,
  selected,
  changeState,
}) => {
  const handleCloseAndPurchase = () => {
    onClose();
    onPurchaseClick();
  };
  return (
    <ModalContent className="px-6">
      <ModalCloseButton />
      <div className="flex justify-center">
        <Text className="py-4 font-semibold text-xl mb-2">예약완료</Text>
      </div>

      <div className="flex justify-center pb-4">
        <Image src="/image/check.png" boxSize={"84px"}></Image>
      </div>
      {/* 1번줄 */}
      <div className="flex justify-center gap-1">
        <Text className="flex text-slate-600 font-normal justify-center text-2xl">
          {changeState}
        </Text>
        <Text className="flex font-semibold justify-center text-2xl">
          {exchangeValue}
        </Text>
        <Text className="flex text-slate-600 font-normal justify-center text-2xl">
          을 사는 거래를 예약했습니다.
        </Text>
      </div>
      {/* 2번줄 */}
      <div className="flex justify-center gap-1">
        <Text className="flex font-semibold justify-center text-2xl">
          {Math.round(calculatedValue)}
        </Text>
        {/* selected에 따라 샀습니다 팔았습니다. */}
        {selected ? (
          <Text className="flex text-slate-600 font-normal justify-center text-2xl">
            원에 샀습니다
          </Text>
        ) : (
          <Text className="flex text-slate-600 font-normal justify-center text-2xl">
            원에 팔았습니다
          </Text>
        )}
      </div>
      {/* 3번줄 */}
      <div className="flex justify-center items-center mt-2">
        <Text className="leading-0 flex text-slate-600 font-normal justify-center text-sm mr-1">
        {value}
        </Text>

      </div>
      
      {/* 마지막 부분 */}
      <div className="bg-slate-100 rounded-md mx-2 mt-2 py-4">
        <Text className="leading-0 flex text-slate-600 justify-center text-lg mr-1">
          환율(Spread) 80% 우대로
        </Text>
        {selected ? (
          <Text className="leading-0 flex text-red-600 font-normal justify-center text-lg mr-1">
            10원 더 싸게 샀어요!
          </Text>
        ) : (
          <Text className="leading-0 flex text-red-600 font-normal justify-center text-lg mr-1">
            10원 더 비싸게 팔았어요!
          </Text>
        )}
      </div>

      <div className="flex justify-end my-4">
        <Button colorScheme="gray" mr={3} onClick={handleCloseAndPurchase}>
          닫기
        </Button>
        <Button name="구매하기" colorScheme="green" onClick={onPurchaseClick}>
          구매하기
        </Button>
      </div>
    </ModalContent>
  )
}

export default ReserveModal
