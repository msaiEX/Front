// import React, { useState } from "react";
// import {
//   XAxis,
//   YAxis,
//   Area,
//   Tooltip,
//   AreaChart,
//   CartesianGrid,
// } from "recharts";
// import { ButtonGroup } from "@chakra-ui/react";

// const MainChart = ({ id, changeState, consumData, todayData }) => {
//   const [timeRange, setTimeRange] = useState("1M");

//   // 데이터 필터링 함수
//   const filterData = (range) => {
//     let data = [];
//     switch (range) {
//       case "1D":
//         data = todayData;
//         break;
//       case "1M":
//         data = consumData.slice(-30);
//         break;
//       case "3M":
//         data = consumData.slice(-90);
//         break;
//       case "6M":
//         data = consumData.slice(-180);
//         break;
//       case "1Y":
//         data = consumData;
//         break;
//       default:
//         data = consumData;
//     }
    
//     // "JPY"이고 "1Y"일 때 내림차순으로 정렬
//     if (changeState === "JPY" && range === "1Y") {
//       data = data.slice().sort((a, b) => b.day.localeCompare(a.day));
//     }
    
//     return data;
//   };

//   const filteredData = filterData(timeRange);

//   // Y축 범위를 동적으로 설정하는 함수
//   const getYAxisDomain = () => {
//     const values = filteredData.map((data) => data.price || data.exchange_rate);
//     let minValue = Math.min(...values);
//     let maxValue = Math.max(...values);
    
//     // changeState가 "JPY"일 경우 추가적인 범위 조정
//     if (changeState === "JPY") {
//       minValue = Math.max(minValue, 990); // 최소값을 990 이상으로 고정
//     }
    
//     return [Math.floor(minValue - 5), Math.ceil(maxValue + 5)];
//   };

//   return (
//     <div>
//       <div>
//         <AreaChart
//           width={800}
//           height={300}
//           data={timeRange === "1D" ? todayData : filteredData}
//           margin={{
//             top: 20,
//             right: 20,
//             bottom: 20,
//             left: 20,
//           }}
//         >
//           <XAxis
//             dataKey={timeRange === "1D" ? "time" : "day"}
//             interval={Math.ceil(
//               (timeRange === "1D" ? todayData : filteredData).length / 5
//             )}
//           />
//           <YAxis domain={getYAxisDomain()} />
          
//           {timeRange !== "1D" && (
//             <CartesianGrid stroke="#ccc" horizontal={true} vertical={false} />
//           )}
//           {console.log(filteredData)}
//           {timeRange === "1D" ? (
//             <Area
//               type="monotone"
//               dataKey="exchange_rate"
//               stroke="#b6e9e5"
//               fill="#b6e9e5"
//             />
//           ) : (
//             <>
//               <Area
//                 type="monotone"
//                 dataKey="price"
//                 stroke="#b6e9e5"
//                 fill="#b6e9e5"
//               />
//               <Area
//                 type="monotone"
//                 dataKey="baserate"
//                 stroke="#32B3B7"
//                 fill="none"
//                 dot={true}
//                 strokeWidth={2}
//               />
//             </>
//           )}
//           <Tooltip />
//         </AreaChart>
//       </div>
//       <div className="flex justify-center mt-4">
//         <div className="w-[360px] py-1 rounded-md flex justify-center items-center bg-slate-200">
//           <ButtonGroup>
//             {["1D", "1M", "3M", "6M", "1Y"].map((range) => (
//               <button
//                 key={range}
//                 className={`px-4 py-2 rounded ${
//                   timeRange === range
//                     ? "bg-white text-gray-800"
//                     : "bg-gray-200 text-gray-800"
//                 }`}
//                 onClick={() => setTimeRange(range)}
//               >
//                 {range}
//               </button>
//             ))}
//           </ButtonGroup>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainChart;
import React, { useState, useEffect } from "react";
import {
  XAxis,
  YAxis,
  Area,
  Tooltip,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  Label,
} from "recharts";
import { ButtonGroup } from "@chakra-ui/react";

const MainChart = ({ id, changeState, consumData, todayData }) => {
  const [timeRange, setTimeRange] = useState("1M");
  const [maxPrice, setMaxPrice] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [avgPrice, setAvgPrice] = useState(null);

  // 데이터 필터링 함수
  const filterData = (range) => {
    let data = [];
    switch (range) {
      case "1D":
        data = todayData;
        break;
      case "1M":
        data = consumData.slice(-30);
        break;
      case "3M":
        data = consumData.slice(-90);
        break;
      case "6M":
        data = consumData.slice(-180);
        break;
      case "1Y":
        data = consumData;
        break;
      default:
        data = consumData;
    }

    // "JPY"이고 "1Y"일 때 내림차순으로 정렬
    if (changeState === "JPY" && range === "1Y") {
      data = data.slice().sort((a, b) => b.day.localeCompare(a.day));
    }

    return data;
  };

  const filteredData = filterData(timeRange);

  // 최고가, 최저가, 평균가 계산
  useEffect(() => {
    if (filteredData.length > 0) {
      const prices = filteredData.flatMap((data) => data.price.map(Number)); // 각 항목에서 price 배열의 값을 가져와 모두 병합
      const max = Math.max(...prices);
      const min = Math.min(...prices);
      const avg = prices.reduce((acc, curr) => acc + curr, 0) / prices.length;

      setMaxPrice(max.toFixed(2));
      setMinPrice(min.toFixed(2));
      setAvgPrice(avg.toFixed(2));
    }
  }, [filteredData]);

  // Y축 범위를 동적으로 설정하는 함수
  const getYAxisDomain = () => {
    const prices = filteredData.flatMap((data) => data.price.map(Number));
    let minValue = Math.min(...prices);
    let maxValue = Math.max(...prices);

    // changeState가 "JPY"일 경우 추가적인 범위 조정
    if (changeState === "JPY") {
      minValue = Math.max(minValue, 990); // 최소값을 990 이상으로 고정
    }

    return [Math.floor(minValue - 5), Math.ceil(maxValue + 5)];
  };

  return (
    <div>
      <div>
        <AreaChart
          width={800}
          height={300}
          data={filteredData} // 모든 timeRange에 대해 동일하게 표시
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis
            dataKey="day" // 모든 범위에서 동일한 데이터 키 사용
            interval={Math.ceil(filteredData.length / 5)}
          />
          <YAxis domain={getYAxisDomain()} />
          <CartesianGrid stroke="#ccc" horizontal={true} vertical={false} />

          {/* 최고가, 최저가, 평균가 점선 표시 */}
          {maxPrice && (
            <ReferenceLine
              y={parseFloat(maxPrice)}
              label={
                <Label
                  value={`최고 ${maxPrice}원`}
                  position="top"
                  fill="red"
                  fontSize={14}
                />
              }
              stroke="red"
              strokeDasharray="3 3"
            />
          )}
          {minPrice && (
            <ReferenceLine
              y={parseFloat(minPrice)}
              label={
                <Label
                  value={`최저 ${minPrice}원`}
                  position="bottom"
                  fill="blue"
                  fontSize={14}
                />
              }
              stroke="blue"
              strokeDasharray="3 3"
            />
          )}
          {avgPrice && (
            <ReferenceLine
              y={parseFloat(avgPrice)}
              label={
                <Label
                  value={`평균 ${avgPrice}원`}
                  position="center"
                  fill="black"
                  fontSize={12}
                />
              }
              stroke="gray"
              strokeDasharray="5 5"
            />
          )}

          {/* 필터된 데이터에 따라 영역 차트 표시 */}
          {timeRange !== "1D" && (
            <CartesianGrid stroke="#ccc" horizontal={true} vertical={false} />
          )}
          {console.log(filteredData)}
          {timeRange === "1D" ? (
            <Area
              type="monotone"
              dataKey="exchange_rate"
              stroke="#b6e9e5"
              fill="#b6e9e5"
            />
          ) : (
            <>
              <Area
                type="monotone"
                dataKey="price"
                stroke="#b6e9e5"
                fill="#b6e9e5"
              />
              <Area
                type="monotone"
                dataKey="baserate"
                stroke="#32B3B7"
                fill="none"
                dot={true}
                strokeWidth={2}
              />
            </>
          )}

          <Tooltip />
        </AreaChart>
      </div>
      <div className="flex justify-center mt-4">
        <div className="w-[360px] py-1 rounded-md flex justify-center items-center bg-slate-200">
          <ButtonGroup>
            {["1D", "1M", "3M", "6M", "1Y"].map((range) => (
              <button
                key={range}
                className={`px-4 py-2 rounded ${
                  timeRange === range
                    ? "bg-white text-gray-800"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setTimeRange(range)}
              >
                {range}
              </button>
            ))}
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default MainChart;
