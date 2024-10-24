// src/modal/AIModal.js
import React from "react";
import {
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Line,
  LabelList,
  ComposedChart,
  Area,
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
              <Text>하나AI는 내일</Text>
              <Text>원/달러 가격을 얼마라고 예측했을까요? </Text>
              <div className="flex">
                <Text>USD= </Text>
                <Text>{aiData.tomorrowPredict}원</Text>
              </div>
              <div className="flex">
                <Text>24.09.26 예상변동폭</Text>
                <Text>{aiData.tomorrowFluctuationRange} </Text>
              </div>
              <div className='py-10 pl-8 pr-10 bg-slate-400 rounded-xl'>
                <ResponsiveContainer width="100%" height={150}>
                  <ComposedChart data={data} barSize={100} barGap={20}>
                    {/* X축 */}
                    <XAxis dataKey="name" />
                    {/* Y축 */}
                    <YAxis domain={[1325, 1335]} />
                    {/* 툴팁 및 범례 */}
                    <Tooltip />
                    <Legend />
                    {/* Bar: 오늘 예측 값을 표시 */}
                    <Bar dataKey="today" fill="#8884d8" name="오늘 예측">
                      {/* 각 Bar의 위에 값을 표시 */}
                      <LabelList dataKey="today" position="top" />
                    </Bar>
                    {/* Bar: 내일 예측 값을 표시 */}
                    <Bar dataKey="tomorrow" fill="#82ca9d" name="내일 예측">
                      {/* 각 Bar의 위에 값을 표시 */}
                      <LabelList dataKey="tomorrow" position="top" />
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
