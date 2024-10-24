import React, { useState, useEffect } from "react";
import { Heading, Image, Text } from "@chakra-ui/react";
import NewsBar from "../components/NewsBar";
import { useParams } from "react-router-dom";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import TitleText from "../components/TitleText";
import axios from "axios";

const NewsPageDetail = () => {
  const [consumData, setConsumData] = useState({});
  const [newsConsumData, setNewsConsumData] = useState([]);
  const [stateData, setStateData] = useState("");
  const [gpttext, setGptText] = useState(false);
  const [fulltext, setFulltext] = useState(false);
  const [paragraphs, setParagraphs] = useState([]); // 텍스트를 미리 나눈 단락 저장
  const [isLoading, setIsLoading] = useState(false);
  const [visibleNewsCount, setVisibleNewsCount] = useState(5); // 기본으로 보여줄 뉴스 개수 설정
  const [showFullNews, setShowFullNews] = useState(false); // 전체 뉴스 표시 여부
  const { id } = useParams();

  const [currentNewsType, setCurrentNewsType] = useState("KOREA");

  useEffect(() => {
    const getUseHistory = async () => {
      const encodedUrl = encodeURIComponent(id);
      try {
        const result = await axios.get(
          `http://localhost:8081/api/news/detail?url=${encodedUrl}`
        );
        setConsumData(result.data.data);

        // 새로운 문장 단락 나누기 로직 적용
        const splitContent = splitByPunctuation(result.data.data.content);
        setParagraphs(splitContent);
        setStateData(result.data.data.state);
        const state = result.data.data.state;
        if (state) {
          const result2 = await axios.get(
            `http://localhost:8081/api/news/state?state=${state}`
          );
          setNewsConsumData(result2.data.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(true);
      }
    };
    getUseHistory();
  }, [id]);

  const handleGpttext = () => {
    setGptText(!gpttext);
  };

  const handleFulltext = () => {
    setFulltext(!fulltext);
  };

  // 더보기 버튼 클릭 시 모든 뉴스를 보여주거나 간략하게 보이게 설정
  const handleToggleNews = () => {
    if (showFullNews) {
      setVisibleNewsCount(5); // 간략하게 보기
    } else {
      setVisibleNewsCount(newsConsumData.length); // 전체 보기
    }
    setShowFullNews(!showFullNews); // 상태 변경
  };

  useEffect(() => {
    setGptText(false);
    setFulltext(false);
  }, [id]);

  // 문장 부호를 기준으로 단락을 나누는 함수
  function splitByPunctuation(text) {
    if (!text) return [];
    return text
      .split(/(?<=[.?!])\s+/)
      .filter((paragraph) => paragraph.trim() !== "");
  }

  // 텍스트를 일정 길이로 자르는 함수
  function truncateText(text, maxLength = 500) {
    if (!text) return "";
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }

  const filteredKoreaNews = newsConsumData.filter((data) => {
    return data.state === stateData && data.source === "KOREA";
  });

  const filteredLocalNews = newsConsumData.filter((data) => {
    return data.state === stateData && data.source === stateData;
  });

  if (!isLoading) return <div>로딩중입니다.</div>;

  return (
    <div className="w-[960px] flex flex-col py-1 px-10 mt-10">
      {/* 헤더라인 */}
      <div className="mb-4">
        <Heading size={"lg"}>{consumData.title}</Heading>
        <Text size={"sm"} className="text-slate-700">
          2024년 8월 12일 07:58
        </Text>
      </div>
      <div className="mb-4">
        <div className="flex">
          <p className="font-semibold text-xl">ChatGPT</p>
          <Image boxSize={"24px"} src="/image/chat-bot.png"></Image>
        </div>

        <span>
          이 기사를
          <span className="font-semibold text-red-500">
            {consumData.result}
          </span>
          로 분석했어요
        </span>
      </div>
      {/* 요약box */}
      <div name="gpt-box" className="bg-green-200 px-6 py-4 rounded-2xl mb-4">
        {/* 요약 텍스트 (항상 보임) */}
        {!gpttext && <Text>{truncateText(consumData.news_summary, 100)}</Text>}
        {/* 애니메이션 적용 영역 */}
        <div
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{
            maxHeight: gpttext ? "1000px" : "0px",
          }}
        >
          {/* 전체 내용 (gpttext가 true일 때만 보임) */}
          {gpttext && (
            <>
              <Text>{consumData.news_summary}</Text>
              <div className="bg-green-100 rounded-2xl px-6 py-4 my-4">
                <div className="flex items-end gap-1 py-3">
                  <Text className="font-semibold text-xl leading-0">
                    AI 분석 포인트
                  </Text>
                  <Image
                    src="/image/ai_analysis_chart.png"
                    className="w-[28px] h-[28px]"
                  ></Image>
                </div>
                <Text className="mb-4">{consumData.news_analysis}</Text>
              </div>
            </>
          )}
        </div>
        {/* 자세히 보기 버튼 */}
        <div className="flex justify-center items-center mt-2  transition-all duration-400 ease-in-out cursor-pointer">
          <Text
            name="show-gpttext"
            className="text-slate-700 py-1 hover:underline"
            onClick={handleGpttext}
          >
            {gpttext ? "간단히보기" : "자세히보기"}
          </Text>
          {gpttext === true ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>
      </div>
      {/* 뉴스 내용 box */}
      <div
        name="content-box"
        className="flex flex-col items-center rounded-2xl px-10 py-4 bg-white"
        style={{ boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" }}
      >
        <Image
          src={consumData.imageUrl}
          className="w-[750px] h-[300px] object-contain bg-slate-100 rounded-xl"
        ></Image>
        <div className="my-6">
          {/* 내용 */}
          {!fulltext &&
            splitByPunctuation(truncateText(consumData.content)).map(
              (paragraph, index) => (
                <Text
                  key={index}
                  className="chakra-text css-rszk63 font-semibold"
                  name="summary-text"
                  style={{ marginBottom: "1.5rem" }}
                >
                  {paragraph}
                </Text>
              )
            )}
          {fulltext &&
            paragraphs.map((paragraph, index) => (
              <Text
                key={index}
                className="chakra-text css-rszk63 font-semibold"
                name="full-text"
                style={{ marginBottom: "1.5rem" }}
              >
                {paragraph}
              </Text>
            ))}
        </div>
        <div className="flex items-center transition-all duration-400 ease-in-out cursor-pointer">
          <Text
            name="show-fulltext"
            onClick={handleFulltext}
            className="py-1 hover:underline"
          >
            {fulltext ? "간단히보기" : "자세히보기"}
          </Text>
          {fulltext ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>
      </div>
      <TitleText title="관련뉴스" />

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
  );
};

export default NewsPageDetail;
