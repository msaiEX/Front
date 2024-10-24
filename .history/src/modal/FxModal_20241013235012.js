import React from "react";
import {
  Text,
  ModalContent,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

import ToggleModal from "../components/ToggleModal";
import WonInput from "../components/WonInput";
import ExChangeInput from "../components/ExChangeInput";
import Clander from "../components/Clander";
import MainDropDown from "../components/MainDropDown";
import CountUp from 'react-countup';

const FxModal = ({
  selected,
  handleToggle,
  format,
  parse,
  wonValue,
  vendWonValue,
  setWonValue,
  setVendWonValue,
  exchangeValue,
  setExchangeValue,
  calculatedValue,
  onClose,
  onPurchaseClick,
  showClander,
  value,
  setValue,
  handleSetValue,
  changeState,
  setChangeState,
  currentInvestPrice,
  currentSellPrice,
  originSellPrice,
}) => {
  //
  const handleSetValueAndClose = () => {
    onClose();
    handleSetValue();
  };

  // 우대율을 계산하는 함수
  const getDiscountRate = (currency) => {
    switch (currency) {
      case "USD":
        return "80%";
      case "EUR":
      case "JPY":
        return "50%";
      case "CNY":
        return "30%";
      default:
        return "0%"; // 기본 우대율 설정
    }
  };

  const discountRate = getDiscountRate(changeState);

  return (
    <ModalContent className="px-6">
      <div className="flex justify-center">
        <Text className="py-4 font-semibold text-xl mb-2">거래하기</Text>
      </div>

      {/* 살래요 팔래요 부분 */}
      <div className="w-full flex justify-between">
        <MainDropDown
          changeState={changeState}
          setChangeState={setChangeState}
        />
        <ToggleModal
          selected={selected}
          handleToggle={handleToggle}
          direction={"center"}
        />
      </div>
      {/* 금액부분 */}
      <div className="flex justify-end my-2">
        <div>
          {/* <Text className="text-3xl flex justify-end">
            {selected ? currentInvestPrice : currentSellPrice}원
          </Text> */}
          <CountUp
            className="text-3xl flex justify-end"
            start={(selected ? currentInvestPrice : currentSellPrice) * 0.8}
            // start={value - 300}
            end={selected ? currentInvestPrice : currentSellPrice}
            duration={2}
            separator=","
            decimals={(selected ? currentInvestPrice : currentSellPrice) % 1 === 0 ? 0 : 2} // 소수점 처리
            decimal="."
            prefix=""
            suffix="원"
          />
          <Text className="text-xl flex justify-end text-slate-600" as="del">
            {originSellPrice}
          </Text>
          <Text>환율 (Spread) {discountRate} 우대</Text>
        </div>
      </div>
      {/* 환율 고르기 */}
      <div className="flex justify-between items-center pt-3 mb-1">
        <Text className="font-bold text-xl leading-0 text-slate-600">
          구매환율
        </Text>

        {/* 예약거래 or 즉시거래 */}
        {showClander ? (
          <Text
            name="예약거래"
            className="px-2 py-1 text-yellow-500 rounded-md border-2 border-yellow-500"
          >
            예약거래
          </Text>
        ) : (
          <Text
            name="즉시거래"
            className="px-2 py-1 text-red-400 rounded-md border-2 border-red-400"
          >
            즉시거래
          </Text>
        )}
      </div>
      {/* 원 input */}
      <WonInput
        selected={selected}
        format={format}
        parse={parse}
        wonValue={wonValue}
        vendWonValue={vendWonValue}
        setWonValue={setWonValue}
        setVendWonValue={setVendWonValue}
      />
      <Text className="text-slate-700 my-2">
        {showClander
          ? "예약 거래할 환율을 선택했어요"
          : "즉시 거래할 현재 환율을 선택했어요"}
      </Text>

      {/* 원하는 금액 input */}
      <Text className="font-bold text-xl leading-0 text-slate-600 mb-1">
        원하는 금액
      </Text>
      <ExChangeInput
        value={exchangeValue}
        setValue={setExchangeValue}
        changeState={changeState}
      />
      {/* 달력 */}
      {showClander && (
        <div>
          <Text className="font-bold text-xl leading-0 text-slate-600 mb-1 mt-3">
            예약기간
          </Text>
          <Clander value={value} setValue={setValue} />
        </div>
      )}
      {/* 환산금액 */}

      <div className="flex mt-2">
        <Text className="font-normal text-xl text-slate-600">환산금액</Text>
        <Text className="font-semibold text-xl text-slate-600 mx-2">
          {Number(calculatedValue).toFixed(2)}
        </Text>
        <Text className="font-normal text-xl text-slate-600">약 KRW</Text>
      </div>
      <ModalCloseButton />

      <div className="flex justify-end my-4">
        <Button colorScheme="gray" mr={3} onClick={handleSetValueAndClose}>
          닫기
        </Button>
        <Button name="구매하기" colorScheme="green" onClick={onPurchaseClick}>
          거래하기
        </Button>
      </div>
    </ModalContent>
  );
};

export default FxModal;
