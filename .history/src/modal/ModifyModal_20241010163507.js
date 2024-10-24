import React, { useState, useEffect } from "react";
import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  Input,
  Text,
  Image,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from "@chakra-ui/react";
import { countryMapperFunction } from "../data/countryMapper";
import Clander from '../components/Clander';

const ModifyModal = ({
  selectedTransaction,
  onClose,
  handleTransactionUpdate,
  handleBackToFxModal
}) => {
  const [withdrawalAmount, setWithdrawalAmount] = useState(
    selectedTransaction.withdrawal_amount
  );

  // reservation_period에서 시작일과 종료일을 추출
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const getTransactionLabel = (type) => {
    if (type === "buy") return "살래요";
    if (type === "sell") return "팔래요";
    return type;
  };

  const [depositAmount, setDepositAmount] = useState(
    selectedTransaction.deposit_amount
  );

  // calculAmount: 출금 금액과 입금 금액을 곱한 결과
  const [calculAmount, setCalculAmount] = useState(0);

  // 출금 금액과 입금 금액이 변경될 때마다 calculAmount를 업데이트
  useEffect(() => {
    setCalculAmount(withdrawalAmount * depositAmount);
  }, [withdrawalAmount, depositAmount]);

  // 숫자 포맷 함수 (예시로 소수점 2자리로 표시)
  const format = (val) => `${parseFloat(val).toFixed(2)}`;
  const parse = (val) => parseFloat(val);

  // const handleWithdrawalChange = (valueString) => {
  //   setWithdrawalAmount(parse(valueString));
  // };

  // // 입금 금액 변경 핸들러
  // const handleDepositChange = (e) => {
  //   setDepositAmount(parseFloat(e.target.value));
  // };
  const handleWithdrawalChange = (valueString) => {
    if (selectedTransaction.transaction_type === 'buy') {
      setWithdrawalAmount(parse(valueString));
    } else {
      setDepositAmount(parse(valueString));
    }
  };
  
  const handleDepositChange = (e) => {
    if (selectedTransaction.transaction_type === 'buy') {
      setDepositAmount(parseFloat(e.target.value));
    } else {
      setWithdrawalAmount(parseFloat(e.target.value));
    }
  };

  // 수정 버튼 클릭 시 호출되는 함수
  const handleUpdateClick = () => {
    // 예약 기간이 null이면 빈 문자열로 설정
    const updatedTransaction = {
      ...selectedTransaction,
      withdrawal_amount: withdrawalAmount,
      deposit_amount: depositAmount,
      // reservation_period: selectedTransaction.reservation_period || "", // null 처리
      reservation_period: value.startDate && value.endDate
        ? `${value.startDate.toISOString().slice(0, 10)}~${value.endDate
            .toISOString()
            .slice(0, 10)}`
        : "",

    };
    delete updatedTransaction.index;

    handleTransactionUpdate(updatedTransaction); // 부모 컴포넌트로 수정된 값 전달
  };
  // 닫기 버튼 클릭 시 두 함수 함께 호출
  const handleCloseClick = () => {
    handleBackToFxModal(); // handleBackToFxModal 함수 호출
    onClose(); // onClose 함수 호출
  };

  useEffect(() => {
    if (selectedTransaction.reservation_period) {
      const [startDate, endDate] = selectedTransaction.reservation_period.split(
        "~"
      );
      setValue({
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      });
    }
  }, [selectedTransaction.reservation_period]);

  return (
    <ModalContent>
      <ModalCloseButton onClick={handleCloseClick}/>
      <ModalHeader>거래변경</ModalHeader>
      <ModalBody>
        <Text>
          {getTransactionLabel(selectedTransaction.transaction_type)}·예약거래
        </Text>
        <div className="border my-1"></div>
        <div className="flex justify-between">
          <Text className='font-semibold'>통화</Text>
          <div className="flex gap-1 items-center mb-2">
            <Image
              src={
                countryMapperFunction(selectedTransaction.currency_code).image
              }
              className="w-[18px] h-[18px]"
            />
            <Text>USD</Text>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Text name="신청환율" className="font-semibold">신청환율</Text>
          <NumberInput
            onChange={handleWithdrawalChange}
            // value={format(withdrawalAmount)}
            value={format(selectedTransaction.transaction_type === 'buy' ? withdrawalAmount : depositAmount)}
            step={0.01}
            min={0}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Text className="font-semibold">신청금액</Text>
          <Input
            type="number"
            // value={depositAmount}
            value={selectedTransaction.transaction_type === 'buy' ? depositAmount : withdrawalAmount}
            onChange={handleDepositChange}
          />
        </div>
        {/* 환산금액 */}
        <div className="flex mt-2">
          <Text className="font-normal text-xl text-slate-600">환산금액</Text>
          <Text className="font-semibold text-xl text-slate-600 mx-2">
            {Number(calculAmount).toFixed(2)}
          </Text>
          <Text className="font-normal text-xl text-slate-600">약 KRW</Text>
        </div>

        <Text className="font-semibold">예약기간</Text>
        {/* Clander 위치 */}
        <Clander value={value} setValue={setValue} />
      </ModalBody>
      <ModalFooter>
        <Button variant="ghost" onClick={handleCloseClick}>
          닫기
        </Button>
        <Button colorScheme="green" onClick={handleUpdateClick}>
          변경하기
        </Button>
      </ModalFooter>
    </ModalContent>
  );
};

export default ModifyModal;