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
//     switch (range) {
//       case "1D":
//         return todayData;
//       case "1M":
//         return consumData.slice(-30);
//       case "3M":
//         return consumData.slice(-90);
//       case "6M":
//         return consumData.slice(-180);
//       case "1Y":
//         return consumData;
//       default:
//         return consumData;
//     }
//   };

//   const filtered_rangeData = filterData(timeRange);
//   const yAxisDomain = changeState === "JPY" ? [880, 1000] : [1300, 1400];

//   return (
//     <div>
//       <div>
//         {timeRange === "1D" ? (
//           <AreaChart
//             width={800}
//             height={300}
//             data={todayData}
//             margin={{
//               top: 20,
//               right: 20,
//               bottom: 20,
//               left: 20,
//             }}
//           >
//             <XAxis
//               dataKey="time"
//               interval={Math.ceil(todayData.length / 5)}
//             />
//             <YAxis domain={yAxisDomain} />
//             <Area dataKey="exchange_rate" stroke="#b6e9e5" fill="#b6e9e5" />
//             <Tooltip />
//           </AreaChart>
//         ) : (
//           <AreaChart
//             width={800}
//             height={300}
//             data={filtered_rangeData}
//             margin={{
//               top: 20,
//               right: 20,
//               bottom: 20,
//               left: 20,
//             }}
//           >
//             <XAxis
//               dataKey="day"
//               interval={Math.ceil(filtered_rangeData.length / 4)}
//             />
//             <YAxis domain={yAxisDomain} />
//             <CartesianGrid stroke="#ccc" horizontal={true} vertical={false} />
//             <Area dataKey="price" stroke="#b6e9e5" fill="#b6e9e5" />
//             <Area
//               dataKey="baserate"
//               stroke="#32B3B7"
//               fill="none"
//               dot={true}
//               strokeWidth={2}
//             />
//             <Tooltip />
//           </AreaChart>
//         )}
//       </div>
//       <div className="flex justify-center">
//         <div className="w-[360px] py-1 rounded-md flex justify-center items-center bg-slate-200">
//           <ButtonGroup>
//             <button
//               className={`px-4 py-2 rounded ${
//                 timeRange === "1D"
//                   ? "bg-white text-gray-800"
//                   : "bg-gray-200 text-gray-800"
//               }`}
//               onClick={() => setTimeRange("1D")}
//             >
//               1D
//             </button>
//             <button
//               className={`px-4 py-2 rounded ${
//                 timeRange === "1M"
//                   ? "bg-white text-gray-800"
//                   : "bg-gray-200 text-gray-800"
//               }`}
//               onClick={() => setTimeRange("1M")}
//             >
//               1M
//             </button>
//             <button
//               className={`px-4 py-2 rounded ${
//                 timeRange === "3M"
//                   ? "bg-white text-gray-800"
//                   : "bg-gray-200 text-gray-800"
//               }`}
//               onClick={() => setTimeRange("3M")}
//             >
//               3M
//             </button>
//             <button
//               className={`px-4 py-2 rounded ${
//                 timeRange === "6M"
//                   ? "bg-white text-gray-800"
//                   : "bg-gray-200 text-gray-800"
//               }`}
//               onClick={() => setTimeRange("6M")}
//             >
//               6M
//             </button>
//             <button
//               className={`px-4 py-2 rounded ${
//                 timeRange === "1Y"
//                   ? "bg-white text-gray-800"
//                   : "bg-gray-200 text-gray-800"
//               }`}
//               onClick={() => setTimeRange("1Y")}
//             >
//               1Y
//             </button>
//           </ButtonGroup>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainChart;




// import React, { useState, useMemo } from "react";
// import {
//   XAxis,
//   YAxis,
//   Area,
//   Tooltip,
//   AreaChart,
//   CartesianGrid,
// } from "recharts";
// import { ButtonGroup } from "@chakra-ui/react";

// const MainChart = ({ id, consumData, todayData }) => {
//   const [timeRange, setTimeRange] = useState("1M");

//   // 데이터 필터링 함수
//   const filterData = (range) => {
//     switch (range) {
//       case "1D":
//         return todayData;
//       case "1M":
//         return consumData.slice(-30);
//       case "3M":
//         return consumData.slice(-90);
//       case "6M":
//         return consumData.slice(-180);
//       case "1Y":
//         return consumData;
//       default:
//         return consumData;
//     }
//   };

//   const filteredData = filterData(timeRange);

//   // 동적 Y축 도메인 계산
//   const yAxisDomain = useMemo(() => {
//     if (timeRange === "1D") {
//       const exchangeRates = todayData.map((d) => d.exchange_rate);
//       const min = Math.min(...exchangeRates);
//       const max = Math.max(...exchangeRates);
//       const padding = (max - min) * 0.1;
//       return [min - padding, max + padding];
//     } else {
//       const values = filteredData.flatMap((d) => [d.price, d.baserate]);
//       const min = Math.min(...values);
//       const max = Math.max(...values);
//       const padding = (max - min) * 0.1;
//       return [min - padding, max + padding];
//     }
//   }, [timeRange, filteredData, todayData]);

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
//           <YAxis domain={yAxisDomain} />
//           {timeRange !== "1D" && (
//             <CartesianGrid stroke="#ccc" horizontal={true} vertical={false} />
//           )}
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


// import React, { useState, useMemo } from "react";
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
//     switch (range) {
//       case "1D":
//         return todayData;
//       case "1M":
//         return consumData.slice(-30);
//       case "3M":
//         return consumData.slice(-90);
//       case "6M":
//         return consumData.slice(-180);
//       case "1Y":
//         return consumData;
//       default:
//         return consumData;
//     }
//   };

//   const filteredData = filterData(timeRange);

//   // 동적 Y축 도메인 계산
//   const yAxisDomain = useMemo(() => {
//     let values = [];

//     if (timeRange === "1D") {
//       values = todayData.map((d) => d.exchange_rate);
//     } else {
//       // Assuming "price" and "baserate" are relevant for all non-"1D" ranges
//       values = filteredData.flatMap((d) => [d.price, d.baserate]);
//     }

//     const min = Math.min(...values);
//     const max = Math.max(...values);
//     const padding = (max - min) * 0.1;

//     if (changeState === "JPY") {
//       // For "JPY", set domain in descending order
//       return [max + padding, min - padding];
//     } else {
//       // For other states, set domain in ascending order
//       return [min - padding, max + padding];
//     }
//   }, [changeState, timeRange, filteredData, todayData]);

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
//           <YAxis domain={yAxisDomain} />
//           {timeRange !== "1D" && (
//             <CartesianGrid stroke="#ccc" horizontal={true} vertical={false} />
//           )}
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
//     switch (range) {
//       case "1D":
//         return todayData;
//       case "1M":
//         return consumData.slice(-30);
//       case "3M":
//         return consumData.slice(-90);
//       case "6M":
//         return consumData.slice(-180);
//       case "1Y":
//         return consumData;
//       default:
//         return consumData;
//     }
//   };

//   const filteredData = filterData(timeRange);

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
//           <YAxis domain={['dataMin - 10', 'dataMax + 10']} />
          
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
//     switch (range) {
//       case "1D":
//         return todayData;
//       case "1M":
//         return consumData.slice(-30);
//       case "3M":
//         return consumData.slice(-90);
//       case "6M":
//         return consumData.slice(-180);
//       case "1Y":
//         return consumData;
//       default:
//         return consumData;
//     }
//   };

//   const filteredData = filterData(timeRange);

//   // Y축 범위를 동적으로 설정하는 함수
//   const getYAxisDomain = () => {
//     const values = filteredData.map((data) => data.price || data.exchange_rate);
//     const minValue = Math.min(...values);
//     const maxValue = Math.max(...values);
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


import React, { useState } from "react";
import {
  XAxis,
  YAxis,
  Area,
  Tooltip,
  AreaChart,
  CartesianGrid,
} from "recharts";
import { ButtonGroup } from "@chakra-ui/react";

const MainChart = ({ id, changeState, consumData, todayData }) => {
  const [timeRange, setTimeRange] = useState("1M");

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

  // Y축 범위를 동적으로 설정하는 함수
  const getYAxisDomain = () => {
    const values = filteredData.map((data) => data.price || data.exchange_rate);
    let minValue = Math.min(...values);
    let maxValue = Math.max(...values);
    
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
          data={timeRange === "1D" ? todayData : filteredData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis
            dataKey={timeRange === "1D" ? "time" : "day"}
            interval={Math.ceil(
              (timeRange === "1D" ? todayData : filteredData).length / 5
            )}
          />
          <YAxis domain={getYAxisDomain()} />
          
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
