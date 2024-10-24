import React, { useEffect, useState } from "react";
import { Text, Image } from "@chakra-ui/react";
import ChartCard from "../components/ChartCard";
import FlowText from "../components/FlowText";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import WorldExInfo from "../components/WorldExInfo";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import {
  setSelectedCurrencies,
  addSelectedCurrency,
  removeSelectedCurrency,
} from '../redux/userSlice'; // 액션 임포트

const MainPage = () => {
  const [consumData, setConsumData] = useState([]);
  const [worldConsumData, setWorldConsumData] = useState([]);
  
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const selectedCurrencies = useSelector((state) => state.user.selectedCurrencies);
  
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const getUseHistory = async () => {
      try {
        const result = await axios.get("http://localhost:8081/api/mainpage");
        const result2 = await axios.get(
          "http://localhost:8081/api/mainpage/worldtable"
        );
        setConsumData(result.data.data);
        setWorldConsumData(result2.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUseHistory();
  }, []);

  // 날짜를 얻는 함수
  const getFormattedDate = (date) => {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // 월은 0부터 시작하므로 +1
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  };

  // 오늘 날짜와 전날 날짜 구하기
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const todayDate = getFormattedDate(today);
  const yesterdayDate = getFormattedDate(yesterday);

  // currency에서 실제 통화 코드만 추출하는 함수
  const extractCurrencyCode = (currency) => {
    const match = currency.match(/[A-Z]{3}/);
    return match ? match[0] : currency;
  };

  // 전날 대비 변동률을 계산하는 함수
  const calculateUpdownRate = (currency) => {
    const todayDataEntry = worldConsumData.find(
      (data) =>
        extractCurrencyCode(data.currency) === extractCurrencyCode(currency) &&
        data.referenceDate === todayDate
    );
    const yesterdayDataEntry = worldConsumData.find(
      (data) =>
        extractCurrencyCode(data.currency) === extractCurrencyCode(currency) &&
        data.referenceDate === yesterdayDate
    );

    if (todayDataEntry && yesterdayDataEntry) {
      const todayRate = parseFloat(todayDataEntry.baseRate.replace(/,/g, ""));
      const yesterdayRate = parseFloat(yesterdayDataEntry.baseRate.replace(/,/g, ""));
      const rateChange = (((todayRate - yesterdayRate) / yesterdayRate) * 100).toFixed(2);
      return rateChange;
    }
    return null;
  };

  // 최신 날짜 데이터를 가져오는 함수
  const getLatestCurrencyData = (currencyCode) => {
    const filteredData = worldConsumData.filter(
      (data) => extractCurrencyCode(data.currency) === currencyCode
    );
    if (filteredData.length === 0) return null;

    return filteredData.reduce((latest, current) => {
      return new Date(latest.referenceDate) > new Date(current.referenceDate)
        ? latest
        : current;
    });
  };

  // 클릭된 WorldExInfo의 currency를 selectedCurrencies에 추가/제거
  const handleWorldExInfoClick = (currency) => {
    const currencyCode = extractCurrencyCode(currency);
    if (selectedCurrencies.includes(currencyCode)) {
      dispatch(removeSelectedCurrency(currencyCode));
    } else {
      dispatch(addSelectedCurrency(currencyCode));
    }
  };

  // consumData와 worldConsumData를 병합하여 통합된 데이터를 생성
  const getMergedData = (currencyCode) => {
    const latestData = getLatestCurrencyData(currencyCode);
    const consumEntry = consumData.find((data) => data.name === currencyCode);

    if (!latestData || !consumEntry) return null;

    return {
      ...consumEntry,
      currentPrice: latestData.baseRate,
      increase: calculateUpdownRate(latestData.currency),
      date: latestData.referenceDate,
    };
  };

  // 당일 데이터 필터링
  const filteredData = worldConsumData.filter(
    (data) => data.referenceDate === todayDate
  );

  // 데이터 표시 제한
  const displayedData = showAll ? filteredData : filteredData.slice(0, 10);

  return (
    <>
      <div className="w-[1140px] h-full flex flex-col py-10 px-10">
        <Text className="font-semibold" fontSize="xl">
          01
        </Text>
        <div className="flex items-center">
          <Text className="font-semibold mr-2" fontSize="3xl">
            오늘의 환율
          </Text>
          <Image
            className="h-[32px] w-[32px]"
            src="./image/mainpageicon.png"
          ></Image>
        </div>
        <Text fontSize="xl">한 눈에 오늘의 환율 정보를 확인해 보세요.</Text>
        <div className="w-full flex-grow py-5">
          <div name="chart-box" className="flex justify-center gap-4">
            {selectedCurrencies.length === 0 ? (
              <Image
                className="h-[330px] w-[250px]"
                src="/image/favorite_box.png"
                alt="favorite box"
              />
            ) : (
              selectedCurrencies.map((currencyCode, index) => {
                const mergedData = getMergedData(currencyCode);
                if (!mergedData) return null;

                return (
                  <ChartCard
                    key={index}
                    index={index + 1}
                    name={currencyCode}
                    imageUrl={mergedData.imageUrl}
                    currentPrice={mergedData.currentPrice}
                    increase={mergedData.increase}
                    date={mergedData.date}
                    chartData={mergedData.chartData}
                  />
                );
              })
            )}
          </div>
          <FlowText />

          <Text className="font-semibold mr-2 mt-20 mb-10" fontSize="3xl">
            세계환율정보
          </Text>
          <div className="w-full text-center flex">
            <Text className="w-[26%]">통화명</Text>
            <Text className="w-[18%]">매매기준율</Text>
            <Text className="w-[18%]">보내실 때</Text>
            <Text className="w-[18%]">받으실때</Text>
            <Text className="w-[20%]">비교</Text>
          </div>
          <div className="border my-2"></div>

          {displayedData.map((data, index) => {
            const updownRate = calculateUpdownRate(data.currency);
            const isSelected = selectedCurrencies.includes(
              extractCurrencyCode(data.currency)
            );
            const delay = index * 100;
            return (
              <div
                key={index}
                onClick={() => handleWorldExInfoClick(data.currency)}
                style={{
                  animationDelay: `${delay}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <WorldExInfo
                  currency={data.currency}
                  baseRate={data.baseRate}
                  remitSend={data.remitSend}
                  remitReceive={data.remitReceive}
                  updownRate={updownRate}
                  isSelected={isSelected}
                />
              </div>
            );
          })}
          <div className="flex justify-center mt-3">
            {filteredData.length > 10 && (
              <button onClick={() => setShowAll(!showAll)}>
                {showAll ? (
                  <div className="w-[120px] flex justify-center items-center rounded-full p-1 bg-[#009577] text-white hover:bg-white hover:text-[#009577] border border-[#009577] transition duration-300">
                    접기 <TiArrowSortedUp />
                  </div>
                ) : (
                  <div className="w-[120px] flex justify-center items-center rounded-full p-1 bg-[#009577] text-white hover:bg-white hover:text-[#009577] border border-[#009577] transition duration-300">
                    자세히 보기 <TiArrowSortedDown />
                  </div>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
