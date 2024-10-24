import { XAxis, YAxis, Area, Tooltip, AreaChart } from "recharts";
import { Button, ButtonGroup } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";

const MainChart = ({ id, changeState }) => {
  const [consumData, setConsumData] = useState([]);
  const [timeRange, setTimeRange] = useState("1M");

  const [todayData, setTodayData] = useState([]);

  useEffect(() => {
    const getUseHistory = async () => {
      try {
        const result = await axios.get(
          `http://localhost:8081/api/mainpage/detail?state=${id}`
        );
        
        // 상태에 따라 데이터 필터링
        const filteredConsumData = result.data.data.filter(
          (item) => item.state === changeState
        );
        const filteredTodayData = result.data.todayData.filter(
          (item) => item.state === changeState
        );

        setConsumData(filteredConsumData);
        setTodayData(filteredTodayData);

      } catch (error) {
        console.log(error);
      }
    };
    getUseHistory();
  }, [id, changeState]);
  console.log("id", changeState)
  console.log(consumData)
  const filterData = (range) => {
    switch (range) {
      case "1D":
        return todayData;
      case "1M":
        return consumData.slice(0, 30);
      case "3M":
        return consumData.slice(0, 90);
      case "6M":
        return consumData.slice(0, 180);
      case "1Y":
        return consumData;
      default:
        return consumData;
    }
  };

  const filtered_rangeData = filterData(timeRange);

  return (
    <div>
      <div>
        {timeRange === "1D" ? (
          <AreaChart
            width={800}
            height={350}
            data={todayData}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <XAxis dataKey="time" /> {/* todayData의 시간을 x축으로 사용 */}
            <YAxis domain={[1330, 1340]} />
            <Area dataKey="exchange_rate" stroke="#8884d8" fill="#8884d8" />
            <Tooltip />
          </AreaChart>
        ) : (
          <AreaChart
            width={800}
            height={350}
            data={filtered_rangeData}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <XAxis dataKey="day" />
            <YAxis domain={[1200, 1350]} />
            <Area dataKey="price" stroke="#b6e9e5" fill="#b6e9e5" />
            <Area dataKey="baserate" stroke="#32B3B7" fill="none" dot="true" />
            <Tooltip />
          </AreaChart>
        )}
      </div>
      <div className="w-full flex justify-center items-center">
        <ButtonGroup variant="outline">
          <Button
            colorScheme={timeRange === "1D" ? "blue" : "gray"}
            onClick={() => setTimeRange("1D")}
          >
            1D
          </Button>
          <Button
            colorScheme={timeRange === "1M" ? "blue" : "gray"}
            onClick={() => setTimeRange("1M")}
          >
            1M
          </Button>
          <Button
            colorScheme={timeRange === "3M" ? "blue" : "gray"}
            onClick={() => setTimeRange("3M")}
          >
            3M
          </Button>
          <Button
            colorScheme={timeRange === "6M" ? "blue" : "gray"}
            onClick={() => setTimeRange("6M")}
          >
            6M
          </Button>
          <Button
            colorScheme={timeRange === "1Y" ? "blue" : "gray"}
            onClick={() => setTimeRange("1Y")}
          >
            1Y
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default MainChart;
