import React, { useState, useEffect }from "react";
import { Image, Text } from "@chakra-ui/react";
import ProgressBar from "@ramonak/react-progress-bar";
import WordCloudComponent from '../components/CloudChart';
import axios from 'axios'
import { useParams } from 'react-router';
import NewsBar from '../components/NewsBar';
import TitleText from '../components/TitleText';
import NewsBarChart from '../components/NewsBarChart';

import { imageMapperFunction } from '../data/imageMapper';
import { countryMapperFunction } from '../data/countryMapper';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure
} from '@chakra-ui/react'
import { FaRegSmile } from "react-icons/fa";
const SemanticPageDetail = () => {
  const [ consumData, setConsumData ] = useState([]);
  const [newsConsumData, setNewsConsumData] = useState([]);
  const [stateData, setStateData] = useState("USD");
  const [ isLoading, setIsLoading ] = useState(false);
  const [ words, setWords ] = useState([]);  // words 상태 추가
  const { id } = useParams();
  const [currentNewsType, setCurrentNewsType] = useState("KOREA");
  const [visibleNewsCount, setVisibleNewsCount] = useState(5); // 기본으로 보여줄 뉴스 개수 설정
  const [showFullNews, setShowFullNews] = useState(false); // 전체 뉴스 표시 여부
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isHovered, setIsHovered] = useState(false);
  console.log(words);

  const handleToggleNews = () => {
    if (showFullNews) {
      setVisibleNewsCount(5); // 간략하게 보기
    } else {
      setVisibleNewsCount(newsConsumData.length); // 전체 보기
    }
    setShowFullNews(!showFullNews); // 상태 변경
  };
  useEffect(() => {
    const getUseHistory = async () => {
      try {
        const result = await axios.get(`http://localhost:8081/api/sentiment/detail?state=${id}`);
        const result2 = await axios.get(`http://localhost:8081/api/news/state?state=USD`);
        console.log(result.data);
        setConsumData(result.data.data[0]);
        setNewsConsumData(result2.data.data);
        console.log("newsdata :",result2.data.data)
        const transformedWords = result.data.worddata.map(item => [item.text, item.value, item.sentiment]);
        console.log("Transformed words", transformedWords)
        setWords(transformedWords);

      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(true);
      }
    }
    getUseHistory();
  }, [])
  const filteredKoreaNews = newsConsumData.filter((data) => {
    return data.state === stateData && data.source === "KOREA";
  });

  const filteredLocalNews = newsConsumData.filter((data) => {
    return data.state === stateData && data.source === stateData;
  });

    // ai image hover logic
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
  if (!isLoading) return <div>로딩중입니다.</div>

  return (
    <>
      <div className="w-[960px] flex flex-col py-1 px-10 mt-10">
        {/* 상단 컴포넌트 */}
        <TitleText title="오늘의 온도"/>
        <div className="w-full flex justify-center py-5 rounded-2xl bg-white" style={{boxShadow: "0 3px 13px rgba(0, 0, 0, 0.2)"}}>
          <div className="flex flex-col">
            {/* inner 상단 box */}
            <div className='flex justify-between'>
              <div className="flex h-[34px] items-center">
                <Text className='font-semibold text-lg mr-1'>{ consumData.state }/KRW</Text>
                <Image className='w-[28px] h-[28px]' src={countryMapperFunction(consumData.state).image} />
              </div>
              <div className="flex flex-col items-center">
                <Image src={imageMapperFunction(consumData.semantic).image} boxSize="180px" alt="smile" />
                <Text className='font-semibold text-2xl'>{ consumData.semantic }</Text>
              </div>
              <div className='p-10'></div>
            </div>
            <ProgressBar
              completed={ Number( consumData.positive ).toFixed(1) }
              width="600px"
              height="35px"
              bgColor={consumData.semantic === "긍정" ? "red" : "blue"}
              className="pt-3"
            />
            <button
            onClick={onOpen}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="text-white bt-background px-3 rounded-full hover:border hover:border-[#009577] hover:bg-white transition-all"
            style={{ height: "42px", width: "42px" }}
          >
            <Image
              src={
                isHovered
                  ? "/image/ai_icon_reverse.png"
                  : "/image/ai_icon2.png"
              }
              boxSize="20px"
              objectFit="cover"
            />
          </button>
            <div className="flex justify-between">
              <div className="flex items-end">
                <Text className='text-xl leading-0 text-red-500'>긍정</Text>
                <Text className='text-2xl font-semibold leading-0 text-red-500'>
                { Number( consumData.positive ).toFixed(1) }%
                </Text>
              </div>
              <div className="flex items-end">
                <Text className='text-2xl font-semibold leading-0 text-blue-500'>
                  { Number( consumData.nagative ).toFixed(1) }%
                </Text>
                <Text className='text-xl leading-0 text-blue-500'>부정</Text>
              </div>
            </div>
          </div>
        </div>
        
        <TitleText title="핫 키워드"/>
        <div className='w-full flex justify-center px-10 rounded-2xl bg-white' style={{boxShadow: "0 3px 13px rgba(0, 0, 0, 0.2)"}}>
          <WordCloudComponent words={words} />
        </div>
        <TitleText title="언급량" />
        <div className='w-full flex justify-center px-10 py-10 rounded-2xl bg-white' style={{boxShadow: "0 3px 13px rgba(0, 0, 0, 0.2)"}}>
          <NewsBarChart />
        </div>
        <TitleText title="관련뉴스"/>
        <div className="flex my-3 w-[187.1px] bg-[#f1f3f8] z-0 relative">
        <div
          className={`absolute top-0 left-0 h-full w-1/2 bg-white rounded transition-transform duration-500 ease-in-out transform ${
            currentNewsType === "KOREA" ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            border: "1px solid #0077b6",
            zIndex: -1,
          }}
        ></div>

        <button
          className={`z-10 px-4 py-2 ${
            currentNewsType === "KOREA" ? "text-blue-700" : "text-slate-700"
          } rounded transition-colors duration-300 ease-in-out`}
          onClick={() => setCurrentNewsType("KOREA")}
        >
          한국 뉴스
        </button>

        <button
          className={`z-10 px-4 py-2 ${
            currentNewsType === "LOCAL" ? "text-blue-700" : "text-slate-700"
          } rounded transition-colors duration-300 ease-in-out`}
          onClick={() => setCurrentNewsType("LOCAL")}
        >
          현지 뉴스
        </button>
      </div>

      {/* 뉴스 목록 */}
      {currentNewsType === "KOREA"
        ? filteredKoreaNews.slice(0, visibleNewsCount).map((data, index) => (
            <NewsBar
              key={index}
              state={data.state}
              result={data.result}
              url={data.url}
              title={data.title}
              content={data.content}
              imageUrl={data.imageUrl}
            />
          ))
        : filteredLocalNews.slice(0, visibleNewsCount).map((data, index) => (
            <NewsBar
              key={index}
              state={data.state}
              result={data.result}
              url={data.url}
              title={data.title}
              content={data.content}
              imageUrl={data.imageUrl}
            />
          ))}

      {/* 뉴스 더보기/간략하게 버튼 */}
      {newsConsumData.length > 5 && (
        <div className="flex justify-center mt-4">
          <button
            className="w-[120px] px-4 py-2 bg-green-600 rounded-full text-white rounded hover:bg-green-700 transition-colors duration-300"
            onClick={handleToggleNews}
          >
            {showFullNews ? "간략하게" : "뉴스 더보기"}
          </button>
        </div>
      )}
        
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>하나AI 감성분석</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className='flex'>
              <div className='border w-full'>
                <div>
                  <FaRegSmile />
                  <Text>{ Number( consumData.positive ).toFixed(1) }%</Text>
                </div>
              </div>
              <div className='border w-full'>
                <div>
                  <FaRegSmile />
                  <Text>{ Number( consumData.positive ).toFixed(1) }%</Text>
                </div>
              </div>
            </div>
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SemanticPageDetail;
