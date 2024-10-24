// src/components/ProfitLineChart.js
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ProfitLineChart = ({ salesData }) => {
  // If salesData is not provided, use dummy data
  const defaultData = [
    { month: "Jan", profit: 4000 },
    { month: "Feb", profit: 3000 },
    { month: "Mar", profit: 5000 },
    { month: "Apr", profit: 7000 },
    { month: "May", profit: 2000 },
    { month: "Jun", profit: 6000 },
  ];

  const data = salesData || defaultData;

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 20, right: 50, left: 10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value) => `${value}원`} />
          <Legend />
          <Line
            type="monotone"
            dataKey="profit"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            name="판매 수익"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProfitLineChart;
