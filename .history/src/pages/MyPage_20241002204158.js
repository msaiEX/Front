import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import TransactionAccount from "../components/TransactionAccount";
import TransactionExchangeAccount from "../components/TransactionExchangeAccount";
import CurrencyAsset from "../components/CurrencyAsset"; // 새로 추가된 컴포넌트
import "../css/style.css";
import Example from "../components/PieChart";
import ProfitLineChart from "../components/ProfitLineChart";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const MyPage = () => {
  const user = useSelector((state) => state.user.user);
  const [accountsData, setAccountsData] = useState(null);
  const [transactionsData, setTransactionsData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredTransactions, setFilteredTransactions] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // 추가된 합계를 저장할 변수 (USD, JPY, CNY, EUR 각각)
  const [usdBuyTotal, setUsdBuyTotal] = useState(0);
  const [usdSellTotal, setUsdSellTotal] = useState(0);
  const [usdNetAmount, setUsdNetAmount] = useState(0); // net USD 변화량 저장

  const [jpyBuyTotal, setJpyBuyTotal] = useState(0);
  const [jpySellTotal, setJpySellTotal] = useState(0);
  const [jpyNetAmount, setJpyNetAmount] = useState(0); // net JPY 변화량 저장

  const [cnyBuyTotal, setCnyBuyTotal] = useState(0);
  const [cnySellTotal, setCnySellTotal] = useState(0);
  const [cnyNetAmount, setCnyNetAmount] = useState(0); // net CNY 변화량 저장

  const [eurBuyTotal, setEurBuyTotal] = useState(0);
  const [eurSellTotal, setEurSellTotal] = useState(0);
  const [eurNetAmount, setEurNetAmount] = useState(0); // net EUR 변화량 저장

  // 초기 잔액 설정
  const initialBalance = 1000000;

  useEffect(() => {
    // API 호출
    const fetchAccountsData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8082/api/getallaccount"
        );
        setAccountsData(response.data.accounts);
        setTransactionsData(response.data.transactions);

        // 결제 상태가 "completed"인 항목만 필터링
        const completedTransactions = response.data.transactions.filter(
          (transaction) => transaction.conclusion_status === "completed"
        );

        console.log("transaction", response.data.transactions);
        console.log("accountData", response.data.accounts);

        // transaction_id에 따라 내림차순으로 정렬
        const sortedTransactions = [...completedTransactions].sort(
          (a, b) => b.transaction_id - a.transaction_id
        );

        setFilteredTransactions(sortedTransactions);

        // 통화별 합산 처리
        let buyTotalUSD = 0,
          sellTotalUSD = 0,
          netAmountUSD = 0;
        let buyTotalJPY = 0,
          sellTotalJPY = 0,
          netAmountJPY = 0;
        let buyTotalCNY = 0,
          sellTotalCNY = 0,
          netAmountCNY = 0;
        let buyTotalEUR = 0,
          sellTotalEUR = 0,
          netAmountEUR = 0;

        completedTransactions.forEach((transaction) => {
          const {
            currency_code,
            transaction_type,
            withdrawal_amount,
            deposit_amount,
          } = transaction;
          if (currency_code === "USD") {
            if (transaction_type === "buy") {
              buyTotalUSD += withdrawal_amount;
              netAmountUSD += deposit_amount; // buy이면 deposit_amount를 더함
            } else if (transaction_type === "sell") {
              sellTotalUSD += deposit_amount;
              netAmountUSD -= withdrawal_amount; // sell이면 withdrawal_amount를 뺌
            }
          } else if (currency_code === "JPY") {
            if (transaction_type === "buy") {
              buyTotalJPY += withdrawal_amount;
              netAmountJPY += deposit_amount;
            } else if (transaction_type === "sell") {
              sellTotalJPY += deposit_amount;
              netAmountJPY -= withdrawal_amount;
            }
          } else if (currency_code === "CNY") {
            if (transaction_type === "buy") {
              buyTotalCNY += withdrawal_amount;
              netAmountCNY += deposit_amount;
            } else if (transaction_type === "sell") {
              sellTotalCNY += deposit_amount;
              netAmountCNY -= withdrawal_amount;
            }
          } else if (currency_code === "EUR") {
            if (transaction_type === "buy") {
              buyTotalEUR += withdrawal_amount;
              netAmountEUR += deposit_amount;
            } else if (transaction_type === "sell") {
              sellTotalEUR += deposit_amount;
              netAmountEUR -= withdrawal_amount;
            }
          }
        });

        // 상태로 합산값을 저장
        setUsdBuyTotal(buyTotalUSD);
        setUsdSellTotal(sellTotalUSD);
        setUsdNetAmount(netAmountUSD);

        setJpyBuyTotal(buyTotalJPY);
        setJpySellTotal(sellTotalJPY);
        setJpyNetAmount(netAmountJPY);

        setCnyBuyTotal(buyTotalCNY);
        setCnySellTotal(sellTotalCNY);
        setCnyNetAmount(netAmountCNY);

        setEurBuyTotal(buyTotalEUR);
        setEurSellTotal(sellTotalEUR);
        setEurNetAmount(netAmountEUR);
      } catch (error) {
        console.error("Error fetching account data:", error);
      } finally {
        setIsLoading(true);
      }
    };

    fetchAccountsData();
  }, []);

  // 잔액을 계산하는 함수 (setState 사용하지 않고 계산)
  const calculateNewBalance = (
    transaction_type,
    withdrawal_amount,
    deposit_amount,
    currentBalance
  ) => {
    if (transaction_type === "buy") {
      return currentBalance - withdrawal_amount;
    } else if (transaction_type === "sell") {
      return currentBalance + deposit_amount;
    }
    return currentBalance;
  };

  function formatNumber(number) {
    if (!number) return "0";
    const truncatedNumber = Math.floor(number);
    return truncatedNumber.toLocaleString("en-US");
  }

  if (!isLoading || !filteredTransactions || !accountsData)
    return <div>로딩중입니다.</div>;

  let currentBalance = initialBalance; // 여기서 거래 내역마다 잔액을 갱신할 변수

  // 환율 설정 (필요 시 동적으로 변경 가능)
  const exchangeRates = {
    USD: 1331.2,
    JPY: 1000,
    CNY: 171.48,
    EUR: 1500, // 예시 환율, 실제 환율로 변경 필요
  };

  return (
    <div className="w-[1140px] h-[calc(100vh-60px)] flex flex-col py-10 px-10">
      <div className="bg-slate-50 p-10 flex">
        <div className="mr-4 ">
          <Text className="flex w-14 justify-center bg-green-400">
            Lv{user.user_lv}
          </Text>
          <Text className="font-semibold text-3xl">{user.user_name}님</Text>
          <Text className="text-3xl">환영합니다.</Text>
        </div>
        <div className="p-10 flex-grow rounded-xl bg-slate-200">
          <Tabs position="relative" variant="soft-rounded" colorScheme="green">
            <TabList>
              <Tab>
                <Text className="text-2xl">내 계좌</Text>
              </Tab>
              <Tab>
                <Text className="text-2xl">외환거래</Text>
              </Tab>
              <Tab>
                <Text className="text-2xl">외화자산</Text>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div className="flex flex-col items-start ml-3">
                  <Text className="font-bold text-xl mt-3">
                    {accountsData[0].accounts_name}
                  </Text>
                  <Text className="text-slate-600 text-lg">
                    278-911354-666607
                  </Text>
                  <div className="flex items-end mt-2">
                    <Text className="font-semibold leading-0 text-3xl">
                      {formatNumber(accountsData[0].krw)} {/* 현재 잔액 표시 */}
                    </Text>
                    <Text className="leading-0 text-2xl"> 원</Text>
                  </div>
                  <Text className="text-slate-600 text-lg">
                    출금가능금액 {formatNumber(accountsData[0].krw)}원
                  </Text>
                </div>

                <div
                  className="bg-white rounded-2xl px-8 py-6 mt-4 scroll-container"
                  style={{ maxHeight: "450px", overflowY: "auto" }}
                >
                  <Text className="text-xl font-bold">거래내역</Text>
                  {filteredTransactions.map((transaction, index) => {
                    // 거래가 처리된 후 새로운 잔액 계산
                    const newBalance = calculateNewBalance(
                      transaction.transaction_type,
                      transaction.withdrawal_amount,
                      transaction.deposit_amount,
                      currentBalance
                    );

                    // 거래 이후의 잔액으로 currentBalance 업데이트
                    currentBalance = newBalance;

                    return (
                      <TransactionAccount
                        key={index}
                        currency_code={transaction.currency_code}
                        transaction_date={transaction.transaction_date}
                        transaction_type={transaction.transaction_type}
                        withdrawal_amount={transaction.withdrawal_amount}
                        deposit_amount={transaction.deposit_amount}
                        balance={newBalance} // 각 거래 후의 잔액 전달
                      />
                    );
                  })}
                </div>
              </TabPanel>

              <TabPanel>
                {/* 외환거래 */}
                <div className="flex flex-col items-start ml-3">
                  <Text className="font-bold text-xl mt-3">
                    하나밀리언달러통장
                  </Text>
                  <Text className="text-slate-600 text-lg">
                    342-910012-87238
                  </Text>
                  <div className="flex items-end my-2">
                    <Text className="leading-0 text-2xl mr-1">USD</Text>
                    <Text className="font-bold leading-0 text-3xl">
                      {formatNumber(accountsData[1].usd)}
                    </Text>
                  </div>
                  <div
                    className="bg-white w-full rounded-2xl px-8 py-6 mt-4"
                    style={{ maxHeight: "500px", overflowY: "auto" }}
                  >
                    <Text className="text-xl font-bold">외환거래내역</Text>
                    {filteredTransactions.map((transaction, index) => (
                      <TransactionExchangeAccount
                        key={index}
                        currency_code={transaction.currency_code}
                        transaction_type={transaction.transaction_type}
                        deposit_amount={transaction.deposit_amount}
                        withdrawal_amount={transaction.withdrawal_amount}
                        conclusion_status={transaction.conclusion_status}
                        transaction_date={transaction.transaction_date}
                      />
                    ))}
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                {/* 외화자산 */}
                <div className="flex flex-col items-start ml-3">
                  <Text className="font-bold text-xl mt-3">
                    하나밀리언달러통장
                  </Text>
                  <div className="flex w-full justify-between">
                    <Text className="text-slate-600 text-lg">
                      342-910012-87238
                    </Text>
                    <Text className="font-semibold" onClick={onOpen}>
                      자세히보기
                    </Text>
                  </div>

                  <div className="bg-white w-full rounded-2xl py-6 mt-4">
                    {/* 외화대가외화금액 (USD, JPY, CNY, EUR) */}
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={10}
                      pagination={{
                        clickable: true,
                      }}
                      style={{ width: "550px" }}
                      modules={[Pagination]}
                    >
                      <SwiperSlide>
                        <CurrencyAsset
                          currencyCode="USD"
                          imageSrc="/image/usd_flag.png"
                          amount={formatNumber(accountsData[1].usd)}
                          exchangeAmount={formatNumber(accountsData[1].usd)}
                          convertedAmount={formatNumber(
                            usdBuyTotal - usdSellTotal
                          )}
                          averageExchangeRate={
                            usdNetAmount !== 0
                              ? formatNumber(
                                  (usdBuyTotal - usdSellTotal) / usdNetAmount
                                )
                              : "0"
                          }
                          currentSellAmount={
                            usdNetAmount !== 0
                              ? formatNumber(
                                  exchangeRates["USD"] * usdNetAmount
                                )
                              : "0"
                          }
                          expectedExchangeRate={exchangeRates["USD"]}
                          expectedProfit={
                            usdBuyTotal -
                            usdSellTotal -
                            exchangeRates["USD"] * usdNetAmount
                              ? formatNumber(
                                  usdBuyTotal -
                                    usdSellTotal -
                                    exchangeRates["USD"] * usdNetAmount
                                )
                              : "0"
                          }
                          expectedProfitRate={
                            usdNetAmount !== 0
                              ? (
                                  (usdBuyTotal - usdSellTotal) /
                                  (exchangeRates["USD"] * usdNetAmount)
                                ).toFixed(2)
                              : "0.00"
                          }
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <CurrencyAsset
                          currencyCode="JPY"
                          imageSrc="/image/jpy_flag.png"
                          amount={formatNumber(accountsData[1].jpy)} // accountsData[1].jpy 가 JPY 데이터를 담고 있다고 가정
                          exchangeAmount={formatNumber(jpyNetAmount)}
                          convertedAmount={formatNumber(
                            jpyBuyTotal - jpySellTotal
                          )}
                          averageExchangeRate={
                            jpyNetAmount !== 0
                              ? formatNumber(
                                  (jpyBuyTotal - jpySellTotal) / jpyNetAmount
                                )
                              : "0"
                          }
                          currentSellAmount={
                            jpyNetAmount !== 0
                              ? formatNumber(
                                  exchangeRates["JPY"] * jpyNetAmount
                                )
                              : "0"
                          }
                          expectedExchangeRate={exchangeRates["JPY"]}
                          expectedProfit={
                            jpyBuyTotal -
                            jpySellTotal -
                            exchangeRates["JPY"] * jpyNetAmount
                              ? formatNumber(
                                  jpyBuyTotal -
                                    jpySellTotal -
                                    exchangeRates["JPY"] * jpyNetAmount
                                )
                              : "0"
                          }
                          expectedProfitRate={
                            jpyNetAmount !== 0
                              ? (
                                  (jpyBuyTotal - jpySellTotal) /
                                  (exchangeRates["JPY"] * jpyNetAmount)
                                ).toFixed(2)
                              : "0.00"
                          }
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <CurrencyAsset
                          currencyCode="CNY"
                          imageSrc="/image/china_flag.png"
                          amount={formatNumber(accountsData[1].cny)} // accountsData[1].cny 가 CNY 데이터를 담고 있다고 가정
                          exchangeAmount={formatNumber(cnyNetAmount)}
                          convertedAmount={formatNumber(
                            cnyBuyTotal - cnySellTotal
                          )}
                          averageExchangeRate={
                            cnyNetAmount !== 0
                              ? formatNumber(
                                  (cnyBuyTotal - cnySellTotal) / cnyNetAmount
                                )
                              : "0"
                          }
                          currentSellAmount={
                            cnyNetAmount !== 0
                              ? formatNumber(
                                  exchangeRates["CNY"] * cnyNetAmount
                                )
                              : "0"
                          }
                          expectedExchangeRate={exchangeRates["CNY"]}
                          expectedProfit={
                            cnyBuyTotal -
                            cnySellTotal -
                            exchangeRates["CNY"] * cnyNetAmount
                              ? formatNumber(
                                  cnyBuyTotal -
                                    cnySellTotal -
                                    exchangeRates["CNY"] * cnyNetAmount
                                )
                              : "0"
                          }
                          expectedProfitRate={
                            cnyNetAmount !== 0
                              ? (
                                  (cnyBuyTotal - cnySellTotal) /
                                  (exchangeRates["CNY"] * cnyNetAmount)
                                ).toFixed(2)
                              : "0.00"
                          }
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <CurrencyAsset
                          currencyCode="EUR"
                          imageSrc="/image/eu_flag.png" // EUR 국기 이미지 경로
                          amount={formatNumber(accountsData[1].eur)} // accountsData[1].eur 가 EUR 데이터를 담고 있다고 가정
                          exchangeAmount={formatNumber(eurNetAmount)}
                          convertedAmount={formatNumber(
                            eurBuyTotal - eurSellTotal
                          )}
                          averageExchangeRate={
                            eurNetAmount !== 0
                              ? formatNumber(
                                  (eurBuyTotal - eurSellTotal) / eurNetAmount
                                )
                              : "0"
                          }
                          currentSellAmount={
                            eurNetAmount !== 0
                              ? formatNumber(
                                  exchangeRates["EUR"] * eurNetAmount
                                )
                              : "0"
                          }
                          expectedExchangeRate={exchangeRates["EUR"]}
                          expectedProfit={
                            eurBuyTotal -
                            eurSellTotal -
                            exchangeRates["EUR"] * eurNetAmount
                              ? formatNumber(
                                  eurBuyTotal -
                                    eurSellTotal -
                                    exchangeRates["EUR"] * eurNetAmount
                                )
                              : "0"
                          }
                          expectedProfitRate={
                            eurNetAmount !== 0
                              ? (
                                  (eurBuyTotal - eurSellTotal) /
                                  (exchangeRates["EUR"] * eurNetAmount)
                                ).toFixed(2)
                              : "0.00"
                          }
                        />
                      </SwiperSlide>
                    </Swiper>
                    {/* 추가 로직 및 내용 */}
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent maxW="600px">
              {/* <ModalHeader>Modal Title</ModalHeader> */}
              <div className="flex justify-center">
                <Text className="py-4 font-semibold text-xl mb-2">
                  내 외화자산
                </Text>
              </div>
              <ModalCloseButton />
              <ModalBody>
                <Tabs variant="soft-rounded" colorScheme="green">
                  <TabList>
                    <Tab>투자비중</Tab>
                    <Tab>수익현황</Tab>
                    <Tab>가격분석</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Example accountsData={accountsData} />
                    </TabPanel>
                    <TabPanel name="graph2">
                      <ProfitLineChart />
                    </TabPanel>
                  </TabPanels>
                  <TabPanels>
                    <Tabs>
                      <TabList>
                        <Tab>USD</Tab>
                        <Tab>JPY</Tab>
                        <Tab>CNY</Tab>
                        <Tab>EUR</Tab>
                      </TabList>

                      <TabPanels>
                        <TabPanel>
                          
                        </TabPanel>
                        <TabPanel>
                          
                        </TabPanel>
                        <TabPanel>
                          
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </TabPanels>
                </Tabs>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="gray" mr={3} onClick={onClose}>
                  닫기
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
