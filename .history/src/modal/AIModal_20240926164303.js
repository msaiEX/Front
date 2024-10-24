// src/modal/AIModal.js
import React from "react";
import {
  ModalContent,
  ModalHeader,
  ModalBody,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import {
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LabelList,
  ComposedChart,
} from "recharts";
const AiModal = ({ onClose, aiData }) => {
  // BarChart에 사용할 데이터 준비
  const data = [
    {
      today: aiData.todayPredict,
      tomorrow: aiData.tomorrowPredict,
    },
  ];
  return (
    <ModalContent width="80%" maxW="600px">
      <ModalHeader>하나 AI 리포트</ModalHeader>
      <ModalBody>
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab>오늘 </Tab>
            <Tab>Tab 2</Tab>
          </TabList>
          <TabPanels>
            <TabPanel name="panel1">
              <Text className='text-lg'style={{ lineHeight: '10px' }}>하나AI는 내일</Text>
              <div className='flex'>
                <Text className='text-xl font-bold'style={{ lineHeight: '35px' }}>원/달러 가격</Text>
                <Text className='text-xl'style={{ lineHeight: '35px' }}>을 얼마라고 예측했을까요?</Text>
              </div>
              <div className="flex gap-1">
                <Text className='text-2xl font-bold'>USD</Text>
                <Text className='text-2xl font-bold'>{aiData.tomorrowPredict}원</Text>
              </div>
              <div className="flex">
                <Text className='text-sm text-slate-500'>24.09.26 예상변동폭</Text>
                <Text className='text-sm'>{aiData.tomorrowFluctuationRange} </Text>
              </div>
              <div className='pt-12 pb-8 pl-8 pr-10 bg-[#252e32] rounded-xl'>
                <ResponsiveContainer width="100%" height={150}>
                  <ComposedChart data={data} barSize={100} barGap={20}>
                    {/* X축 */}
                    <XAxis dataKey="name" 
                      tick={{ fill: '#f2edd3' }}
                      axisLine={{ stroke: '#f2edd3' }}
                      tickLine={{ stroke: '#f2edd3' }}
                    />
                    {/* Y축 */}
                    <YAxis domain={[1325, 1335]} 
                      tick={{ fill: '#f2edd3' }}
                      axisLine={{ stroke: '#f2edd3' }}
                      tickLine={{ stroke: '#f2edd3' }}
                    />
                    {/* 툴팁 및 범례 */}
                    <Tooltip />
                    <Legend />
                    {/* Bar: 오늘 예측 값을 표시 */}
                    <Bar dataKey="today" fill="#fd5167" name="오늘 예측">
                      {/* 각 Bar의 위에 값을 표시 */}
                      <LabelList dataKey="today" position="top" fill="#f2edd3"/>
                    </Bar>
                    {/* Bar: 내일 예측 값을 표시 */}
                    <Bar dataKey="tomorrow" fill="#2e8efe" name="내일 예측">
                      {/* 각 Bar의 위에 값을 표시 */}
                      <LabelList dataKey="tomorrow" position="top" fill="#f2edd3"/>
                    </Bar>
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </ModalBody>
    </ModalContent>
  );
};

export default AiModal;
