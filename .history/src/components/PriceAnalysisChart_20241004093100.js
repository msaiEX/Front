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


// src/components/PriceAnalysisChart.js

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell, // Cell 컴포넌트 추가
} from "recharts";

const PriceAnalysisChart = ({ data }) => {
  // metric에 따른 색상 매핑
  const colorMap = {
    "최고가": "#FF6384", // 빨간색
    "평균가": "#36A2EB", // 파란색
    "최저가": "#FFCE56", // 노란색
  };

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
        {/* Legend 제거 */}
        {/* <Legend /> */}
        <Bar dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colorMap[entry.metric] || "#3182CE"} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PriceAnalysisChart;
