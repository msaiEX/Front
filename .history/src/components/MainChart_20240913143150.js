// import React, { useState, useEffect } from "react";
// import {
//   XAxis,
//   YAxis,
//   Area,
//   Tooltip,
//   AreaChart,
//   CartesianGrid,
// } from "recharts";
// import { Button, ButtonGroup } from "@chakra-ui/react";
// import axios from "axios";

// const MainChart = ({ id, changeState }) => {
//   const [consumData, setConsumData] = useState([]);
//   const [timeRange, setTimeRange] = useState("1M");
//   const [todayData, setTodayData] = useState([]);

//   // 데이터를 받아오는 함수
//   const getUseHistory = async () => {
//     try {
//       const result = await axios.get(
//         `http://localhost:8081/api/mainpage/detail?state=${id}`
//       );

//       // 상태에 따라 데이터 필터링
//       const filteredConsumData = result.data.data.filter(
//         (item) => item.state === changeState
//       );
//       const filteredTodayData = result.data.todayData.filter(
//         (item) => item.state === changeState
//       );

//       setConsumData(filteredConsumData);
//       setTodayData(filteredTodayData);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // 페이지가 렌더링될 때와 매 1분마다 데이터를 가져옴
//   useEffect(() => {
//     // 컴포넌트가 렌더링될 때 즉시 데이터를 받아옴
//     getUseHistory();

//     // 1분(60,000밀리초)마다 데이터를 다시 받아오는 타이머 설정
//     const interval = setInterval(() => {
//       getUseHistory();
//     }, 600000); // 1분마다 실행

//     // 컴포넌트 언마운트 시 타이머 정리
//     return () => clearInterval(interval);
//   }, [id, changeState]);

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
//   console.log("today", todayData)
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
//             <XAxis dataKey="time" interval={Math.ceil(todayData.length / 5)} />
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
//               dot="true"
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

// MainChart.js
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
    switch (range) {
      case "1D":
        return todayData;
      case "1M":
        return consumData.slice(-30);
      case "3M":
        return consumData.slice(-90);
      case "6M":
        return consumData.slice(-180);
      case "1Y":
        return consumData;
      default:
        return consumData;
    }
  };

  const filtered_rangeData = filterData(timeRange);
  const yAxisDomain = changeState === "JPY" ? [880, 1000] : [1300, 1400];

  return (
    <div>
      <div>
        {timeRange === "1D" ? (
          <AreaChart
            width={800}
            height={300}
            data={todayData}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <XAxis
              dataKey="time"
              interval={Math.ceil(todayData.length / 5)}
            />
            <YAxis domain={yAxisDomain} />
            <Area dataKey="exchange_rate" stroke="#b6e9e5" fill="#b6e9e5" />
            <Tooltip />
          </AreaChart>
        ) : (
          <AreaChart
            width={800}
            height={300}
            data={filtered_rangeData}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <XAxis
              dataKey="day"
              interval={Math.ceil(filtered_rangeData.length / 4)}
            />
            <YAxis domain={yAxisDomain} />
            <CartesianGrid stroke="#ccc" horizontal={true} vertical={false} />
            <Area dataKey="price" stroke="#b6e9e5" fill="#b6e9e5" />
            <Area
              dataKey="baserate"
              stroke="#32B3B7"
              fill="none"
              dot={true}
              strokeWidth={2}
            />
            <Tooltip />
          </AreaChart>
        )}
      </div>
      <div className="flex justify-center">
        <div className="w-[360px] py-1 rounded-md flex justify-center items-center bg-slate-200">
          <ButtonGroup>
            <button
              className={`px-4 py-2 rounded ${
                timeRange === "1D"
                  ? "bg-white text-gray-800"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setTimeRange("1D")}
            >
              1D
            </button>
            <button
              className={`px-4 py-2 rounded ${
                timeRange === "1M"
                  ? "bg-white text-gray-800"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setTimeRange("1M")}
            >
              1M
            </button>
            <button
              className={`px-4 py-2 rounded ${
                timeRange === "3M"
                  ? "bg-white text-gray-800"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setTimeRange("3M")}
            >
              3M
            </button>
            <button
              className={`px-4 py-2 rounded ${
                timeRange === "6M"
                  ? "bg-white text-gray-800"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setTimeRange("6M")}
            >
              6M
            </button>
            <button
              className={`px-4 py-2 rounded ${
                timeRange === "1Y"
                  ? "bg-white text-gray-800"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setTimeRange("1Y")}
            >
              1Y
            </button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default MainChart;
