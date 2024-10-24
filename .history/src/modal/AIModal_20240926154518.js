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

const AiModal = ({ onClose, aiData }) => {
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
            <TabPanel>
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
