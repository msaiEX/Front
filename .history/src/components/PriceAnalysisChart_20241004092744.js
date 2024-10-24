// src/components/PriceAnalysisChart.js

// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const PriceAnalysisChart = ({ data }) => {
//   return (
//     <ResponsiveContainer width="100%" height={300}>
//       <BarChart
//         data={data}
//         margin={{
//           top: 20,
//           right: 30,
//           left: 20,
//           bottom: 5,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="metric" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Bar dataKey="value" fill="#3182CE" />
//       </BarChart>
//     </ResponsiveContainer>
//   );
// };

// export default PriceAnalysisChart;


// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// // 사용자 정의 바 컴포넌트
// const CustomBar = ({ data }) => {
//   // 각 metric에 따른 색상 설정
//   const getColor = (metric) => {
//     switch (metric) {
//       case "최고가":
//         return "#FF6384"; // 빨간색
//       case "평균가":
//         return "#36A2EB"; // 파란색
//       case "최저가":
//         return "#FFCE56"; // 노란색
//       default:
//         return "#8884d8"; // 기본 색상
//     }
//   };

//   return data.map((entry, index) => (
//     <Bar
//       key={index}
//       dataKey="value"
//       fill={getColor(entry.metric)} // metric에 따른 색상 적용
//       name={entry.metric}
//       data={[entry]} // 단일 데이터 포인트 렌더링
//     />
//   ));
// };

// const PriceAnalysisChart = ({ data }) => {
//   return (
//     <ResponsiveContainer width="100%" height={300}>
//       <BarChart
//         data={data}
//         margin={{
//           top: 20,
//           right: 30,
//           left: 20,
//           bottom: 5,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="metric" />
//         <YAxis />
//         <Tooltip />
//         {/* CustomBar 컴포넌트를 사용하여 데이터에 따른 색상을 설정 */}
//         <CustomBar data={data} />
//       </BarChart>
//     </ResponsiveContainer>
//   );
// };

// export default PriceAnalysisChart;

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// 사용자 정의 바 차트 컴포넌트
const PriceAnalysisChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="metric" />
        <YAxis />
        <Tooltip />

        {/* 각 metric에 맞는 색상을 Bar에 개별적으로 적용 */}
        <Bar
          dataKey="value"
          fill={(entry) => {
            switch (entry.metric) {
              case "최고가":
                return "#FF6384"; // 최고가: 빨간색
              case "평균가":
                return "#36A2EB"; // 평균가: 파란색
              case "최저가":
                return "#FFCE56"; // 최저가: 노란색
              default:
                return "#8884d8"; // 기본 색상
            }
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PriceAnalysisChart;

