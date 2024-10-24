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
  Text
} from "@chakra-ui/react";

const AiModal = ({ onClose, aiData }) => {
  return (
    <ModalContent>
      <ModalHeader>AI 모달</ModalHeader>
      <ModalBody>
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab> 하나 AI 리포트 </Tab>
            <Tab>Tab 2</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Text>하나AI는 오늘가격을</Text>
              <Text>오늘 가격을 얼마라고 예측했을까요?</Text>
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
