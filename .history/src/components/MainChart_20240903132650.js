import { XAxis, YAxis, Area, Tooltip, AreaChart } from 'recharts';
import { Button, ButtonGroup } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const MainChart = ({ id }) => {
  const [ consumData, setConsumData ] = useState([]);
  const [ timeRange, setTimeRange ] = useState('3M');

  useEffect(() => {
    const getUseHistory = async () => {
      try {
        const result = await axios.get(`http://localhost:8081/api/mainpage/detail?state=${id}`);
        setConsumData(result.data.data);
        console.log(result.data.data)
      } catch (error) {
        console.log(error);
      }
    }
    getUseHistory();
  }, [])

  const filterData = (range) => {
    switch (range) {
      case '1D':
        return consumData.slice(0, 1);
      case '1M':
        return consumData.slice(0, 30);
      case '3M':
        return consumData.slice(0, 90);
      case '6M':
        return consumData.slice(0, 180);
      case '1Y':
        return consumData;
      default:
        return consumData;
    }
  }

  const filtered_rangeData = filterData(timeRange);

  return (
    <div>
      <div>
        <AreaChart
          width={800}
          height={350}
          data={filtered_rangeData}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <XAxis dataKey="day" />
          <YAxis domain={[1250, 1350]}/>
          <Area dataKey="price" stroke="#8884d8" fill="#8884d8" />
          <XAxis dataKey="day" />
          <Area dataKey="baserate" stroke="#ff7300" fill='none' dot="true" />
          <Tooltip />
        </AreaChart>
      </div>
      <div className='w-full flex justify-center items-center'>
        <ButtonGroup variant="outline">
        <Button 
            colorScheme={timeRange === '1D' ? 'blue' : 'gray'}
            onClick={() => setTimeRange('1D')}
          >
            1D
          </Button>
          <Button 
            colorScheme={timeRange === '1M' ? 'blue' : 'gray'}
            onClick={() => setTimeRange('1M')}
          >
            1M
          </Button>
          <Button 
            colorScheme={timeRange === '3M' ? 'blue' : 'gray'}
            onClick={() => setTimeRange('3M')}
          >
            3M
          </Button>
          <Button 
            colorScheme={timeRange === '6M' ? 'blue' : 'gray'}
            onClick={() => setTimeRange('6M')}
          >
            6M
          </Button>
          <Button 
            colorScheme={timeRange === '1Y' ? 'blue' : 'gray'}
            onClick={() => setTimeRange('1Y')}
          >
            1Y
          </Button>
        </ButtonGroup>
      </div>
    </div>
  )
}

export default MainChart