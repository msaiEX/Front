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