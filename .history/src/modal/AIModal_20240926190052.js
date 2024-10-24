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
  Image,
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
  AreaChart,
  CartesianGrid,
  Area
} from "recharts";
import { AiOutlineExclamationCircle } from "react-icons/ai";
const AiModal = ({ onClose, aiData }) => {
  // 데이터를 파싱하여 JSON 객체로 변환
  const weekPredictData = Object.entries(JSON.parse(aiData.weekPredict)).map(
    ([date, value]) => ({
      date, // 날짜
      value: parseFloat(value.replace(/,/g, "")), // 쉼표 제거 후 숫자로 변환
    })
  );

  const monthPredictData = Object.entries(JSON.parse(aiData.monthPredict)).map(
    ([date, value]) => ({
      date, // 날짜
      value: parseFloat(value.replace(/,/g, "")), // 쉼표 제거 후 숫자로 변환
    })
  );
  
  console.log(weekPredictData)
  console.log("month : ", monthPredictData)
  // BarChart에 사용할 데이터 준비
  const data = [
    {
      today: aiData.todayPredict,
      tomorrow: aiData.tomorrowPredict,
    },
  ];
  return (
    <ModalContent width="80%" maxW="600px" maxH="520px">
      <ModalHeader>하나 AI 리포트</ModalHeader>
      <ModalBody className='overflow-y-auto'>
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab>내일</Tab>
            <Tab>주간</Tab>
            <Tab>한달</Tab>
          </TabList>
          <TabPanels>
            <TabPanel name="panel1" className="mt-5">
              <Text className="text-lg" style={{ lineHeight: "10px" }}>
                하나AI는 내일
              </Text>
              <div className="flex">
                <Text
                  className="text-xl font-semibold"
                  style={{ lineHeight: "35px" }}
                >
                  원/달러 가격
                </Text>
                <Text className="text-xl" style={{ lineHeight: "35px" }}>
                  을 얼마라고 예측했을까요?
                </Text>
              </div>
              <div className="flex gap-1">
                <Text className="text-2xl font-bold">USD</Text>
                <Text className="text-2xl font-bold">
                  {aiData.tomorrowPredict}원
                </Text>
              </div>
              <div className="flex">
                <Text className="text-sm text-slate-500">
                  24.09.26 예상변동폭
                </Text>
                <Text className="text-sm font-bold text-slate-500">
                  {aiData.tomorrowFluctuationRange}
                </Text>
              </div>
              <div className="pt-12 pb-8 pl-8 pr-10 bg-gray-700 rounded-xl mt-5">
                <ResponsiveContainer width="100%" height={150}>
                  <ComposedChart data={data} barSize={100} barGap={20}>
                    {/* X축 */}
                    <XAxis
                      dataKey="name"
                      tick={{ fill: "#f2edd3" }}
                      axisLine={{ stroke: "#f2edd3" }}
                      tickLine={{ stroke: "#f2edd3" }}
                    />
                    {/* Y축 */}
                    <YAxis
                      domain={[1325, 1335]}
                      tick={{ fill: "#f2edd3" }}
                      axisLine={{ stroke: "#f2edd3" }}
                      tickLine={{ stroke: "#f2edd3" }}
                    />
                    {/* 툴팁 및 범례 */}
                    <Tooltip />
                    <Legend />
                    {/* Bar: 오늘 예측 값을 표시 */}
                    <Bar dataKey="today" fill="#fd5167" name="오늘 예측">
                      {/* 각 Bar의 위에 값을 표시 */}
                      <LabelList
                        dataKey="today"
                        position="top"
                        fill="#f2edd3"
                      />
                    </Bar>
                    {/* Bar: 내일 예측 값을 표시 */}
                    <Bar dataKey="tomorrow" fill="#2e8efe" name="내일 예측">
                      {/* 각 Bar의 위에 값을 표시 */}
                      <LabelList
                        dataKey="tomorrow"
                        position="top"
                        fill="#f2edd3"
                      />
                    </Bar>
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
              {/* 설명란 */}
              <div className="p-3 bg-green-100 rounded-xl mt-6">
                <div className="flex gap-1 mx-3">
                  <div className="bg-white border border-green-500 w-[42px] h-[42px] rounded-full flex justify-center items-center">
                    <Image
                      src="/image/hanabot.png"
                      className="h-[32px] w-[32px]"
                    ></Image>
                  </div>
                  <div className="mt-1 px">
                    <Text className="text-sm font-semibold text-slate-700">
                      외환 전문 어시스턴트
                    </Text>
                    <Text
                      className="text-sm font-bold text-slate-700"
                      style={{ lineHeight: "15px" }}
                    >
                      하나AI
                    </Text>
                  </div>
                </div>
                <div className="border border-gray-200 m-3"></div>
                <Text className="text-sm font-semibold text-slate-600 px-3 mb-3">
                  하나 AI가 이렇게 분석한 이유를 설명해줄게요.
                </Text>
                <Text className="text-sm text-slate-600 px-3">
                  {aiData.todayPredictReason}
                </Text>
              </div>
              <div className="border border-gray-200 my-3"></div>
              <div className="flex items-center gap-1">
                <AiOutlineExclamationCircle />
                <Text>꼭 확인해주세요.</Text>
              </div>
              <Text className="text-sm ml-4 text-slate-600">
                하나은행에서 제공하는 외환 리포트와, 2000-2024년 까지의 정보를
                기반으로 AI가 분석한 내용입니다. AI 분석 정보의 정확성은 보장할
                수 없으며, 어떠한 경우에도 외환 매매 결과에 대한 법적 소재의
                증빙자료로 사용될 수 없음을 밝힙니다.
              </Text>
            </TabPanel>
            {/* 주간 */}
            <TabPanel className="mt-5">
              <Text className="text-lg" style={{ lineHeight: "10px" }}>
                하나AI는 일주일 후
              </Text>
              <div className="flex">
                <Text
                  className="text-xl font-semibold"
                  style={{ lineHeight: "35px" }}
                >
                  원/달러 가격
                </Text>
                <Text className="text-xl" style={{ lineHeight: "35px" }}>
                  을 얼마라고 예측했을까요?
                </Text>
              </div>
              <div className="flex gap-1">
                <Text className="text-2xl font-bold">USD</Text>
                <Text className="text-2xl font-bold">
                  {weekPredictData[5].value}.0원
                </Text>
              </div>
              <div className="flex">
                <Text className="text-sm text-slate-500">
                  24.09.26 예상변동폭
                </Text>
                <Text className="text-sm font-bold text-slate-500">
                  {aiData.tomorrowFluctuationRange}{" "}
                </Text>
              </div>
              <div className="pt-12 pb-8 pl-8 pr-10 bg-gray-700 rounded-xl mt-5">
                <ResponsiveContainer width="100%" height={150}>
                  <AreaChart data={weekPredictData}>
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="date" stroke="#f2edd3" />
                    <YAxis stroke="#f2edd3" domain={[1320, 1335]} />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#2e8efe"
                      fill="#fd5167"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              {/* 설명란 */}
              <div className="p-3 bg-green-100 rounded-xl mt-6">
                <div className="flex gap-1 mx-3">
                  <div className="bg-white border border-green-500 w-[42px] h-[42px] rounded-full flex justify-center items-center">
                    <Image
                      src="/image/hanabot.png"
                      className="h-[32px] w-[32px]"
                    ></Image>
                  </div>
                  <div className="mt-1 px">
                    <Text className="text-sm font-semibold text-slate-700">
                      외환 전문 어시스턴트
                    </Text>
                    <Text
                      className="text-sm font-bold text-slate-700"
                      style={{ lineHeight: "15px" }}
                    >
                      하나AI
                    </Text>
                  </div>
                </div>
                <div className="border border-gray-200 m-3"></div>
                <Text className="text-sm font-semibold text-slate-600 px-3 mb-3">
                  하나 AI가 이렇게 분석한 이유를 설명해줄게요.
                </Text>
                <Text className="text-sm text-slate-600 px-3">
                  {aiData.weekReason}
                </Text>
              </div>
              <div className="border border-gray-200 my-3"></div>
              <div className="flex items-center gap-1">
                <AiOutlineExclamationCircle />
                <Text>꼭 확인해주세요.</Text>
              </div>
              <Text className="text-sm ml-4 text-slate-600">
                하나은행에서 제공하는 외환 리포트와, 2000-2024년 까지의 정보를
                기반으로 AI가 분석한 내용입니다. AI 분석 정보의 정확성은 보장할
                수 없으며, 어떠한 경우에도 외환 매매 결과에 대한 법적 소재의
                증빙자료로 사용될 수 없음을 밝힙니다.
              </Text>
            </TabPanel>
            {/* 월간 */}
            <TabPanel className="mt-5">
              <Text className="text-lg" style={{ lineHeight: "10px" }}>
                하나AI는 한달 후
              </Text>
              <div className="flex">
                <Text
                  className="text-xl font-semibold"
                  style={{ lineHeight: "35px" }}
                >
                  원/달러 가격
                </Text>
                <Text className="text-xl" style={{ lineHeight: "35px" }}>
                  을 얼마라고 예측했을까요?
                </Text>
              </div>
              <div className="flex gap-1">
                <Text className="text-2xl font-bold">USD</Text>
                <Text className="text-2xl font-bold">
                  {monthPredictData[28].value}.0원
                </Text>
              </div>
              <div className="flex">
                <Text className="text-sm text-slate-500">
                  24.09.26 예상변동폭
                </Text>
                <Text className="text-sm font-bold text-slate-500">
                  {aiData.tomorrowFluctuationRange}{" "}
                </Text>
              </div>
              <div className="pt-12 pb-8 pl-8 pr-10 bg-gray-700 rounded-xl mt-5">
                <ResponsiveContainer width="100%" height={150}>
                  <AreaChart data={monthPredictData}>
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="date" stroke="#f2edd3" />
                    <YAxis stroke="#f2edd3" domain={[1320, 1335]} />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#2e8efe"
                      fill="#fd5167"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              {/* 설명란 */}
              <div className="p-3 bg-green-100 rounded-xl mt-6">
                <div className="flex gap-1 mx-3">
                  <div className="bg-white border border-green-500 w-[42px] h-[42px] rounded-full flex justify-center items-center">
                    <Image
                      src="/image/hanabot.png"
                      className="h-[32px] w-[32px]"
                    ></Image>
                  </div>
                  <div className="mt-1 px">
                    <Text className="text-sm font-semibold text-slate-700">
                      외환 전문 어시스턴트
                    </Text>
                    <Text
                      className="text-sm font-bold text-slate-700"
                      style={{ lineHeight: "15px" }}
                    >
                      하나AI
                    </Text>
                  </div>
                </div>
                <div className="border border-gray-200 m-3"></div>
                <Text className="text-sm font-semibold text-slate-600 px-3 mb-3">
                  하나 AI가 이렇게 분석한 이유를 설명해줄게요.
                </Text>
                <Text className="text-sm text-slate-600 px-3">
                  {aiData.finalAnalysis}
                </Text>
              </div>
              <div className="border border-gray-200 my-3"></div>
              <div className="flex items-center gap-1">
                <AiOutlineExclamationCircle />
                <Text>꼭 확인해주세요.</Text>
              </div>
              <Text className="text-sm ml-4 text-slate-600">
                하나은행에서 제공하는 외환 리포트와, 2000-2024년 까지의 정보를
                기반으로 AI가 분석한 내용입니다. AI 분석 정보의 정확성은 보장할
                수 없으며, 어떠한 경우에도 외환 매매 결과에 대한 법적 소재의
                증빙자료로 사용될 수 없음을 밝힙니다.
              </Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </ModalBody>
    </ModalContent>
  );
};

export default AiModal;
