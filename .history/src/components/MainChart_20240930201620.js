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
  console.log("consumData : ", consumData)
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

  // 최고가, 최저가, 평균가 계산 (todayData 기준)
  useEffect(() => {
    if (timeRange === "1D" && todayData.length > 0) {
      const exchangeRates = todayData.map((data) => data.exchange_rate);
      const max = Math.max(...exchangeRates);
      const min = Math.min(...exchangeRates);
      const avg = exchangeRates.reduce((acc, curr) => acc + curr, 0) / exchangeRates.length;

      setMaxPrice(max.toFixed(2));
      setMinPrice(min.toFixed(2));
      setAvgPrice(avg.toFixed(2));
    } else if (filteredData.length > 0) {
      const prices = filteredData.flatMap((data) => data.price.map(Number)); // 각 항목에서 price 배열의 값을 가져와 모두 병합
      const max = Math.max(...prices);
      const min = Math.min(...prices);
      const avg = prices.reduce((acc, curr) => acc + curr, 0) / prices.length;

      setMaxPrice(max.toFixed(2));
      setMinPrice(min.toFixed(2));
      setAvgPrice(avg.toFixed(2));
    }
  }, [filteredData, todayData, timeRange]);

  // Y축 범위를 동적으로 설정하는 함수
  const getYAxisDomain = () => {
    if (timeRange === "1D") {
      const exchangeRates = todayData.map((data) => data.exchange_rate);
      const minValue = Math.min(...exchangeRates);
      const maxValue = Math.max(...exchangeRates);
      return [Math.floor(minValue - 5), Math.ceil(maxValue + 5)];
    } else {
      const prices = filteredData.flatMap((data) => data.price.map(Number));
      let minValue = Math.min(...prices);
      let maxValue = Math.max(...prices);
      return [Math.floor(minValue - 5), Math.ceil(maxValue + 5)];
    }
  };

  return (
    <div>
      <div>
        <AreaChart
          width={800}
          height={300}
          data={timeRange === "1D" ? todayData : filteredData} // 모든 timeRange에 대해 동일하게 표시
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis
            dataKey={timeRange === "1D" ? "time" : "day"} // timeRange에 따라 key 사용
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
                  position="center"
                  fill="red"
                  fontSize={14}
                />
              }
              stroke="red"
              strokeDasharray="5 5"
            />
          )}
          {minPrice && (
            <ReferenceLine
              y={parseFloat(minPrice)}
              label={
                <Label
                  value={`최저 ${minPrice}원`}
                  position="center"
                  fill="blue"
                  fontSize={14}
                />
              }
              stroke="blue"
              strokeDasharray="5 5"
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
                  fontSize={14}
                />
              }
              stroke="gray"
              strokeDasharray="5 5"
            />
          )}

          {/* 필터된 데이터에 따라 영역 차트 표시 */}
          {timeRange === "1D" ? (
            <Area
              type="monotone"
              dataKey="exchange_rate"
              stroke="#32B3B7"
              fill="none"
              // dot={renderDot(todayData)}
              strokeWidth={3}
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
