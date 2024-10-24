import React, { useState } from "react";
import {
  Text,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Icon,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import ReservedCard from "../components/ReservedCard";
import { countryMapperFunction } from "../data/countryMapper";

const SelectModal = ({
  onClose,
  onPurchaseClick,
  transactionHistory,
  handleReservedCardClick,
  changeState,
  setChangeState,
  handleBackToFxModal
}) => {
  const [selectedCurrency, setSelectedCurrency] = useState("전체통화");

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  // 닫기 버튼 클릭 시 두 함수 함께 호출
  const handleCloseClick = () => {
    handleBackToFxModal(); // handleBackToFxModal 함수 호출
    onClose(); // onClose 함수 호출
  };

  const filteredTransactionHistory =
    selectedCurrency === "전체통화"
      ? transactionHistory
      : transactionHistory.filter((data) => data.currency_code === selectedCurrency);

  return (
    <ModalContent className="px-6">
      <ModalCloseButton onClick={handleCloseClick}/>
      <div className="flex justify-center">
        <Text className="py-4 font-semibold text-xl mb-2">예약내역</Text>
      </div>

      <div>
        <Menu bg="white">
          <MenuButton bg="white" as={Button} p="1">
            <div className="flex items-center">
              <Image
                boxSize="1.2rem"
                borderRadius="full"
                src={countryMapperFunction(changeState).image}
                alt="Fluffybuns the destroyer"
                mr="12px"
              />
              <div>{selectedCurrency}</div>
              <Icon as={ChevronDownIcon} w={6} h={6} ml="8px" />
            </div>
          </MenuButton>
          <MenuList>
            <MenuItem minH="48px" onClick={() => handleCurrencyChange("전체통화")}>
              <span>전체통화</span>
            </MenuItem>
            <MenuItem minH="48px" onClick={() => handleCurrencyChange("USD")}>
              <span>미국 USD</span>
            </MenuItem>
            <MenuItem minH="48px" onClick={() => handleCurrencyChange("JPY")}>
              <span>일본 JPY</span>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>

      <Text className="text-slate-600">
        미채결 예약건수: {transactionHistory.length}, 신규예약 가능건수 {30 - transactionHistory.length}
      </Text>


      <div style={{ maxHeight: "300px", overflowY: "auto", scrollbarWidth: "none", msOverflowStyle: "none" }} className="hide-scrollbar">
        {filteredTransactionHistory.map((data, index) => (
          <ReservedCard
            key={index}
            transaction_type={data.transaction_type}
            transaction_date={data.transaction_date}
            withdrawal_amount={data.withdrawal_amount}
            deposit_amount={data.deposit_amount}
            reservation_period={data.reservation_period}
            currency_code={data.currency_code}
            handleReservedCardClick={() => handleReservedCardClick(index)}  // 클릭 시 트랜잭션 선택
          />
        ))}
      </div>

      <ModalFooter>
        <Button variant="ghost" mr={3} onClick={handleCloseClick}>
          닫기
        </Button>
        {/* <Button variant="ghost" onClick={onPurchaseClick}>
          변경하기
        </Button> */}
      </ModalFooter>
    </ModalContent>
  );
};

export default SelectModal;
