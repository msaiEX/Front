// import React, { useEffect, useState } from 'react';
// import { Text, Image } from '@chakra-ui/react';
// import ChartCard from '../components/ChartCard';
// import FlowText from '../components/FlowText';
// import axios from 'axios';
// import { useSelector } from 'react-redux';
// import WorldExInfo from '../components/WorldExInfo';

// const MainPage = () => {
//   const [consumData, setConsumData] = useState([]);
//   const [worldConsumData, setWorldConsumData] = useState([]);
//   const [selectedCurrencies, setSelectedCurrencies] = useState(['USD']);  // 기본으로 'USD' 포함
//   const user = useSelector((state) => state.user.user);

//   useEffect(() => {
//     const getUseHistory = async () => {
//       try {
//         const result = await axios.get("http://localhost:8081/api/mainpage");
//         const result2 = await axios.get("http://localhost:8081/api/mainpage/worldtable");
//         setConsumData(result.data.data);
//         setWorldConsumData(result2.data.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getUseHistory();
//   }, []);

//   // currency에서 실제 통화 코드만 추출하는 함수
//   const extractCurrencyCode = (currency) => {
//     return currency.split(' ')[1] || currency.split(' ')[0];  // 예: "미국 USD" -> "USD"
//   };

//   // 전날 대비 변동률을 계산하는 함수
//   const calculateUpdownRate = (currency) => {
//     const todayData = worldConsumData.find(data => data.currency === currency && data.referenceDate === "2024-09-11");
//     const yesterdayData = worldConsumData.find(data => data.currency === currency && data.referenceDate === "2024-09-10");

//     if (todayData && yesterdayData) {
//       const todayRate = parseFloat(todayData.baseRate.replace(/,/g, ''));
//       const yesterdayRate = parseFloat(yesterdayData.baseRate.replace(/,/g, ''));
//       return ((todayRate - yesterdayRate) / yesterdayRate * 100).toFixed(2); // 변동률 계산
//     }
//     return null;
//   };

//   // 최신 날짜 데이터를 가져오는 함수
//   const getLatestCurrencyData = (currencyCode) => {
//     const filteredData = worldConsumData.filter(data => extractCurrencyCode(data.currency) === currencyCode);
//     if (filteredData.length === 0) return null;

//     return filteredData.reduce((latest, current) => {
//       return new Date(latest.referenceDate) > new Date(current.referenceDate) ? latest : current;
//     });
//   };

//   // 클릭된 WorldExInfo의 currency를 selectedCurrencies에 추가/제거
//   const handleWorldExInfoClick = (currency) => {
//     const currencyCode = extractCurrencyCode(currency);  // 통화 코드 추출
//     setSelectedCurrencies((prevCurrencies) =>
//       prevCurrencies.includes(currencyCode)
//         ? prevCurrencies.filter(code => code !== currencyCode)  // 이미 선택되어 있다면 제거
//         : [...prevCurrencies, currencyCode]  // 선택되어 있지 않다면 추가
//     );
//   };

//   // consumData와 worldConsumData를 병합하여 통합된 데이터를 생성
//   const getMergedData = (currencyCode) => {
//     const latestData = getLatestCurrencyData(currencyCode);  // 최신 worldConsumData
//     const consumEntry = consumData.find(data => data.name === currencyCode);  // consumData에서 일치하는 항목 찾기

//     if (!latestData || !consumEntry) return null;

//     return {
//       ...consumEntry,  // consumData의 기존 정보들 (chartData 포함)
//       currentPrice: latestData.baseRate,  // worldConsumData의 baseRate
//       increase: calculateUpdownRate(latestData.currency),  // 변동률
//       date: latestData.referenceDate  // 최신 날짜
//     };
//   };

//   return (
//     <>
//       <div className='w-[1140px] h-full flex flex-col py-10 px-10'>
//         <Text className='font-semibold' fontSize='xl'>01</Text>
//         <div className='flex items-center'>
//           <Text className='font-semibold mr-2' fontSize='3xl'>오늘의 환율</Text>
//           <Image className='h-[32px] w-[32px]' src='./image/mainpageicon.png'></Image>
//         </div>
//         <Text fontSize='xl'>한 눈에 오늘의 환율 정보를 확인해 보세요.</Text>
//         <div className='w-full flex-grow py-5'>
//           <div name="chart-box" className='flex justify-center gap-4'>
//             {selectedCurrencies.map((currencyCode, index) => {
//               const mergedData = getMergedData(currencyCode);  // 병합된 데이터 가져오기
//               if (!mergedData) return null;

//               return (
//                 <ChartCard
//                   key={index}
//                   index={index + 1}
//                   name={currencyCode}
//                   imageUrl={mergedData.imageUrl}  // consumData의 이미지 URL
//                   currentPrice={mergedData.currentPrice}  // worldConsumData의 baseRate 사용
//                   increase={mergedData.increase}  // 변동률
//                   date={mergedData.date}  // 최신 reference_date 사용
//                   chartData={mergedData.chartData}  // consumData의 chartData 사용
//                 />
//               );
//             })}
//           </div>
//           <FlowText />

//           <Text className='font-semibold mr-2 mt-20 mb-10' fontSize='3xl'>세계환율정보</Text>
//           <div className='w-full text-center flex'>
//             <Text className='w-[26%]'>통화명</Text>
//             <Text className='w-[18%]'>매매기준율</Text>
//             <Text className='w-[18%]'>보내실 때</Text>
//             <Text className='w-[18%]'>받으실때</Text>
//             <Text className='w-[20%]'>비교</Text>
//           </div>
//           <div className='border my-2'></div>

//           {worldConsumData
//             .filter(data => data.referenceDate === "2024-09-11") // 오늘 날짜 데이터만 표시
//             .map((data, index) => {
//               const updownRate = calculateUpdownRate(data.currency); // 변동률 계산
//               const isSelected = selectedCurrencies.includes(extractCurrencyCode(data.currency));
//               return (
//                 <div key={index} onClick={() => handleWorldExInfoClick(data.currency)}>
//                   <WorldExInfo
//                     currency={data.currency}
//                     baseRate={data.baseRate}
//                     remitSend={data.remitSend}
//                     remitReceive={data.remitReceive}
//                     updownRate={updownRate}
//                     isSelected={isSelected}  // 선택 여부 전달
//                   />
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default MainPage;
import React, { useEffect, useState } from "react";
import { Text, Image } from "@chakra-ui/react";
import ChartCard from "../components/ChartCard";
import FlowText from "../components/FlowText";
import axios from "axios";
import { useSelector } from "react-redux";
import WorldExInfo from "../components/WorldExInfo";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const MainPage = () => {
  const [consumData, setConsumData] = useState([]);
  const [worldConsumData, setWorldConsumData] = useState([]);
  const [selectedCurrencies, setSelectedCurrencies] = useState(["USD"]); // 기본으로 'USD' 포함
  const user = useSelector((state) => state.user.user);
  const [showAll, setShowAll] = useState(false); // Added state variable
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

  // currency에서 실제 통화 코드만 추출하는 함수
  const extractCurrencyCode = (currency) => {
    return currency.split(" ")[1] || currency.split(" ")[0]; // 예: "미국 USD" -> "USD"
  };

  // 전날 대비 변동률을 계산하는 함수
  const calculateUpdownRate = (currency) => {
    const todayData = worldConsumData.find(
      (data) =>
        data.currency === currency && data.referenceDate === "2024-09-11"
    );
    const yesterdayData = worldConsumData.find(
      (data) =>
        data.currency === currency && data.referenceDate === "2024-09-10"
    );

    if (todayData && yesterdayData) {
      const todayRate = parseFloat(todayData.baseRate.replace(/,/g, ""));
      const yesterdayRate = parseFloat(
        yesterdayData.baseRate.replace(/,/g, "")
      );
      return (((todayRate - yesterdayRate) / yesterdayRate) * 100).toFixed(2); // 변동률 계산
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
    const currencyCode = extractCurrencyCode(currency); // 통화 코드 추출
    setSelectedCurrencies(
      (prevCurrencies) =>
        prevCurrencies.includes(currencyCode)
          ? prevCurrencies.filter((code) => code !== currencyCode) // 이미 선택되어 있다면 제거
          : [...prevCurrencies, currencyCode] // 선택되어 있지 않다면 추가
    );
  };

  // consumData와 worldConsumData를 병합하여 통합된 데이터를 생성
  const getMergedData = (currencyCode) => {
    const latestData = getLatestCurrencyData(currencyCode); // 최신 worldConsumData
    const consumEntry = consumData.find((data) => data.name === currencyCode); // consumData에서 일치하는 항목 찾기

    if (!latestData || !consumEntry) return null;

    return {
      ...consumEntry, // consumData의 기존 정보들 (chartData 포함)
      currentPrice: latestData.baseRate, // worldConsumData의 baseRate
      increase: calculateUpdownRate(latestData.currency), // 변동률
      date: latestData.referenceDate, // 최신 날짜
    };
  };
  // Filter and slice the data based on 'showAll'
  const filteredData = worldConsumData.filter(
    (data) => data.referenceDate === "2024-09-11"
  );
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
            {selectedCurrencies.map((currencyCode, index) => {
              const mergedData = getMergedData(currencyCode); // 병합된 데이터 가져오기
              if (!mergedData) return null;

              return (
                <ChartCard
                  key={index}
                  index={index + 1}
                  name={currencyCode}
                  imageUrl={mergedData.imageUrl} // consumData의 이미지 URL
                  currentPrice={mergedData.currentPrice} // worldConsumData의 baseRate 사용
                  increase={mergedData.increase} // 변동률
                  date={mergedData.date} // 최신 reference_date 사용
                  chartData={mergedData.chartData} // consumData의 chartData 사용
                />
              );
            })}
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
            const updownRate = calculateUpdownRate(data.currency); // 변동률 계산
            const isSelected = selectedCurrencies.includes(
              extractCurrencyCode(data.currency)
            );
            return (
              <div
                key={index}
                onClick={() => handleWorldExInfoClick(data.currency)}
              >
                <WorldExInfo
                  currency={data.currency}
                  baseRate={data.baseRate}
                  remitSend={data.remitSend}
                  remitReceive={data.remitReceive}
                  updownRate={updownRate}
                  isSelected={isSelected} // 선택 여부 전달
                />
              </div>
            );
          })}

          {filteredData.length > 10 && (
            <button onClick={() => setShowAll(!showAll)}>
              {showAll ?
                <div className='flex'>접기 <TiArrowSortedDown /></div> :
                <div className='flex'>자세히 보기 <TiArrowSortedUp /></div> 
              }
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default MainPage;
