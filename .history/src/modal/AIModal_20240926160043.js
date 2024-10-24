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
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
const AiModal = ({ onClose, aiData }) => {
  // BarChart에 사용할 데이터 준비
  const data = [
    {
      name: '오늘 예측',
      today: aiData.todayPredict,
    },
    {
      name: '내일 예측',
      tomorrow: aiData.tomorrowPredict,
    },
  ];
  return (
    <ModalContent>
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
              <div className='flex'>
                <Text>USD= </Text>
                <Text>{aiData.tomorrowPredict}원</Text>
              </div>
              <div className='flex'>
                <Text>24.09.26 예상변동폭</Text>
                <Text>{aiData.tomorrowFluctuationRange} </Text>
              </div>
              <ResponsiveContainer width="100%" height={150}>
                <BarChart 
                  data={data}
                  barCategoryGap="5%"
                >
                  <XAxis dataKey="name" />
                  <YAxis domain={[aiData.todayPredict - 10, aiData.tomorrowPredict + 10]} />
                  <Tooltip />
                  {/* Bar: 오늘 예측 값을 표시 */}
                  <Bar dataKey="today" fill="#8884d8" name="오늘 예측" />
                  {/* Bar: 내일 예측 값을 표시 */}
                  <Bar dataKey="tomorrow" fill="#82ca9d" name="내일 예측" />
                </BarChart>
              </ResponsiveContainer>
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
