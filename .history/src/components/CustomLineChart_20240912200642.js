import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'A', min: 30, max: 80, median: 55 },
  { name: 'B', min: 40, max: 90, median: 65 },
  { name: 'C', min: 50, max: 100, median: 75 }
];

const CustomLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="min" stroke="#8884d8" />
        <Line type="monotone" dataKey="max" stroke="#82ca9d" />
        <Line type="monotone" dataKey="median" stroke="#ff7300" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;