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

  const ranges = ["1D", "1M", "3M", "6M", "1Y"];

  // 현재 선택된 range의 인덱스를 계산하여 이동할 거리 계산
  const selectedIndex = ranges.indexOf(timeRange);

  // consumData의 키 이름 변경
  const transformedConsumData = consumData.map((item) => ({
    ...item,
    매매기준율: item.baserate,
    "최저가-최고가": item.price,
  }));

  // 데이터 필터링 함수
  const filterData = (range) => {
    let data = [];
    switch (range) {
      case "1D":
        data = todayData;
        break;
      case "1M":
        data = transformedConsumData.slice(-30);
        break;
      case "3M":
        data = transformedConsumData.slice(-90);
        break;
      case "6M":
        data = transformedConsumData.slice(-180);
        break;
      case "1Y":
        data = transformedConsumData;
        break;
      default:
        data = transformedConsumData;
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
    if (timeRange === "1D" && todayData.length > 0) {
      const exchangeRates = todayData.map((data) => data.exchange_rate);
      const max = Math.max(...exchangeRates);
      const min = Math.min(...exchangeRates);
      const avg =
        exchangeRates.reduce((acc, curr) => acc + curr, 0) /
        exchangeRates.length;

      setMaxPrice(max.toFixed(2));
      setMinPrice(min.toFixed(2));
      setAvgPrice(avg.toFixed(2));
    } else if (filteredData.length > 0) {
      const prices = filteredData.flatMap((data) =>
        data["최저가-최고가"].map(Number)
      );
      const max = Math.max(...prices);
      const min = Math.min(...prices);
      const avg = prices.reduce((acc, curr) => acc + curr, 0) / prices.length;

      setMaxPrice(max.toFixed(2));
      setMinPrice(min.toFixed(2));
      setAvgPrice(avg.toFixed(2));
    }
  }, [filteredData, todayData, timeRange]);

  // Y축 범위 설정 함수
  const getYAxisDomain = () => {
    if (timeRange === "1D") {
      const exchangeRates = todayData.map((data) => data.exchange_rate);
      const minValue = Math.min(...exchangeRates);
      const maxValue = Math.max(...exchangeRates);
      return [Math.floor(minValue - 5), Math.ceil(maxValue + 5)];
    } else {
      const prices = filteredData.flatMap((data) =>
        data["최저가-최고가"].map(Number)
      );
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
              strokeWidth={3}
            />
          ) : (
            <>
              <Area
                type="monotone"
                dataKey="최저가-최고가"
                stroke="#b6e9e5"
                fill="#b6e9e5"
              />
              <Area
                type="monotone"
                dataKey="매매기준율"
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
        {/* <div className="w-[360px] py-1 rounded-md flex justify-center items-center bg-slate-200">
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
        </div> */}
        <div
          className="absolute top-0 left-0 h-full bg-white rounded-md transition-transform duration-300 ease-in-out"
          style={{
            width: `${100 / ranges.length}%`, // 각 버튼 크기에 맞게 배경 크기 조정
            transform: `translateX(${selectedIndex * 100}%)`, // 선택된 인덱스에 맞게 이동
          }}
        ></div>

        {/* 버튼 그룹 */}
        {ranges.map((range) => (
          <button
            key={range}
            className={`relative z-10 px-4 py-2 transition-colors duration-300 ${
              timeRange === range
                ? "text-gray-800" // 선택된 텍스트 색상
                : "text-gray-500"
            }`}
            onClick={() => setTimeRange(range)}
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MainChart;
