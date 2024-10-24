// // src/components/PriceAnalysisChart.js

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

// const PriceAnalysisChart = ({ data }) => {
//   const colors = ["#3182CE", "#82ca9d", "#ff7300", "#8884d8"]; // 다양한 색상

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
//         {data.map((entry, index) => (
//           <Bar key={index} dataKey="value" fill={colors[index % colors.length]} />
//         ))}
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
} from "recharts";

const PriceAnalysisChart = ({ data }) => {
  const colors = ["#3182CE", "#82ca9d", "#ff7300"]; // 다양한 색상

  // '최고가', '평균가', '최저가'를 각각 하나의 데이터로 처리
  const limitedData = [
    { metric: "최고가", value: data.maxPrice },
    { metric: "평균가", value: data.avgPrice },
    { metric: "최저가", value: data.minPrice }
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={limitedData} // '최고가', '평균가', '최저가'만 전달
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
        <Bar dataKey="value" fill={colors[0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PriceAnalysisChart;
