import React, { useState, useEffect } from "react";
import {
  Text,
  Modal,
  ModalOverlay,
  useDisclosure,
  Image,
} from "@chakra-ui/react";

import MainRecommandButton from "../components/MainRecommandButton";
// import Account from "../components/Account";
import MainChart from "../components/MainChart";
import FxModal from "../modal/FxModal";
import axios from "axios";
import DireactModal from "../modal/DireactModal";
import ReserveModal from "../modal/ReserveModal";
import SelectModal from "../modal/SelectModal";
import SelectButton from "../components/SelectButton";
import ModifyModal from "../modal/ModifyModal";
import { useParams, useLocation } from "react-router-dom";
import MainDropDown from "../components/MainDropDown";
import BuySell from "../components/MainPageDetail/BuySell";
import { IoReload } from "react-icons/io5";
import { useSelector } from "react-redux";
import "../css/style.css";
import PointBox from "../components/PointBox";
import { investPointMapper } from "../data/investPointMapper";
import ReportViewer from "../components/ReportViewer";
import LevelPopover from "../components/LevelPopover";
import FinanceReportTable from "../components/FinanceReportTable";
import FinanceReportSummary from "../components/FinanceReportSummary";
import GdpCard from "../components/GdpCard";
import { HiOutlineDocumentReport } from "react-icons/hi";
// import { FaSearchDollar } from "react-icons/fa";
import { TbReport } from "react-icons/tb";
// import { LiaSearchDollarSolid } from "react-icons/lia";
import { CgSearchFound } from "react-icons/cg";
import AiModal from "../modal/AIModal";
import Loading from "../components/Loading";
const MainPageDetail = () => {
  const [isHovered, setIsHovered] = useState(false);

  const user = useSelector((state) => state.user.user);
  // 현재 가격 상태
  const [currentInvestPrice, setCurrentInvestPrice] = useState(0);
  const [currentSellPrice, setCurrentSellPrice] = useState(0);
  const [isPriceLoading, setIsPriceLoading] = useState(false);
  const [showClander, setShowClander] = useState(false);
  const [changeState, setChangeState] = useState("USD");
  const [selectedSection, setSelectedSection] = useState(""); // 선택된 섹션 관리
  const handleSelect = (sectionName) => {
    setSelectedSection(sectionName); // 선택된 섹션 업데이트
  };
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태
  const [aiData, setAiData] = useState(null); // AI 데이터를 저장할 상태
  const [loading, setLoading] = useState(false); // 로딩 상태 관리
  // 원본가격
  const [originInvestPrice, setOriginInvestPrice] = useState(0);
  const [originSellPrice, setOriginSellPrice] = useState(0);
  // 날짜 상태
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  // 날짜 범위 형식화 함수
  const formatDateRange = (dates) => {
    const startDate = new Date(dates.startDate);
    const endDate = new Date(dates.endDate);

    // YYYY-MM-DD 형식으로 변환
    const startDateString = startDate.toISOString().split("T")[0];
    const endDateString = endDate.toISOString().split("T")[0];

    return `${startDateString}~${endDateString}`;
  };

  // 거래 내역 상태
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  // Modal 관련 상태
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selected, setSelected] = useState(true);
  const [isFixed, setIsFixed] = useState(false);
  const [modalType, setModalType] = useState("FxModal");

  // WonInput 관련 상태
  const format = (val) => `$` + val;
  const parse = (val) => val.replace(/^\$/, "");
  const [wonValue, setWonValue] = useState(0);
  const [vendWonValue, setVendWonValue] = useState(0);
  const [exchangeValue, setExchangeValue] = useState(0); // ExChangeInput 상태
  const [calculatedValue, setCalculatedValue] = useState(0); // 계산 결과 상태

  // MainChart 데이터 상태
  const [consumData, setConsumData] = useState([]);
  const [todayData, setTodayData] = useState([]);

  // 토글 핸들러
  const handleToggle = () => {
    setSelected(!selected);
  };
  const { id } = useParams();
  // console.log("id =", id);
  const location = useLocation();
  const { increase } = location.state || {};
  console.log(increase);
  // axios로 데이터 가져오기
  useEffect(() => {
    const getUseHistory = async () => {
      try {
        const result = await axios.get(
          `http://localhost:8081/api/mainpage/detail?state=${id}`
        );

        console.log("result data : ", result.data);

        // 오늘 날짜 가져오기
        const todayDate = new Date().toISOString().split("T")[0];

        // MainChart 데이터 필터링
        const filteredConsumData = result.data.data.filter(
          (item) => item.state === changeState
        );
        const filteredTodayData = result.data.todayData.filter(
          (item) => item.state === changeState && item.date === todayDate // 날짜 조건 추가
        );

        setConsumData(filteredConsumData);
        setTodayData(filteredTodayData);

        // 필터링된 오늘 데이터가 있을 경우 상태 업데이트
        if (filteredTodayData.length > 0) {
          const { remit_send, remit_receive } =
            filteredTodayData[filteredTodayData.length - 1];
          // setCurrentInvestPrice(remit_send);
          //
          setCurrentInvestPrice(
            parseFloat((remit_send - remit_send * 0.008).toFixed(2))
          );
          setOriginInvestPrice(remit_send);
          // setCurrentSellPrice(remit_receive);
          setCurrentSellPrice(
            parseFloat((remit_receive + remit_receive * 0.008).toFixed(2))
          );
          setOriginSellPrice(remit_receive);
          setWonValue(parseFloat((remit_send - remit_send * 0.008).toFixed(2)));
          setVendWonValue(
            parseFloat((remit_receive + remit_receive * 0.008).toFixed(2))
          );
        }

        console.log("filteredTodayData:", filteredTodayData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsPriceLoading(true);
      }
    };
    getUseHistory();

    // 1분마다 데이터 갱신
    const interval = setInterval(() => {
      getUseHistory();
    }, 60000); // 60,000ms = 1분

    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearInterval(interval);
  }, [id, changeState]);

  useEffect(() => {
    console.log("value updated:", value); // value 업데이트 시 로그 출력
  }, [value]);

  // ai 컴포넌트 열기
  // const handleAIModalOpen = async () => {
  //   setModalType("AIModal"); // AIModal로 modalType 변경
  //   onOpen(); // 모달 열기

  //   setIsPriceLoading(false);

  //   try {
  //     // 데이터 가져오기
  //     const response = await axios.get("http://localhost:8081/api/predict");
  //     setAiData(response.data[0]); // 데이터 설정
  //   } catch (error) {
  //     console.error("데이터 가져오기 오류:", error);
  //   } finally {
  //     setIsPriceLoading(true);
  //   }
  // };

  const handleAIModalOpen = async () => {
    
    setLoading(true); // 로딩 스피너 표시
    try {
      // 2초 동안 로딩 스피너를 표시
      // setTimeout(async () => {
      //   // AI 데이터를 가져옴
      //   const response = await axios.get("http://localhost:8081/api/predict");
      //   setAiData(response.data[0]); // AI 데이터 설정
      //   setModalType("AIModal"); // AIModal로 변경
      //   onOpen(); // 모달 열기
      // }, 2000); // 2초 딜레이 설정
      
        // AI 데이터를 가져옴
        
      const response = await axios.get("http://localhost:8081/api/predict");
      setAiData(response.data[0]); // AI 데이터 설정
      setModalType("AIModal"); // AIModal로 변경
    } catch (error) {
      console.error("데이터 가져오기 오류:", error);
    } finally {
      setTimeout(() => {
        setLoading(false); // 로딩 스피너 숨기기
        onOpen();
      }, 2500)
      
      console.log(loading)
    }
  };

  // 날짜 초기화 함수
  const handleSetValue = () => {
    setValue({
      startDate: null,
      endDate: null,
    });
  };

  // selected 상태에 따라 calculatedValue 계산
  useEffect(() => {
    let result;
    if (selected) {
      result = parseFloat(exchangeValue) * parseFloat(wonValue);
    } else {
      result = parseFloat(exchangeValue) * parseFloat(vendWonValue);
    }
    setCalculatedValue(isNaN(result) ? 0 : result.toFixed(2)); // 소수점 2자리까지 표시
  }, [exchangeValue, wonValue, vendWonValue, selected]);

  // 모달 직접 구매 로직
  useEffect(() => {
    // 값 비교를 위해 소수점 두 자리까지 고정
    const roundedWonValue = parseFloat(wonValue.toFixed(2));
    const roundedVendWonValue = parseFloat(vendWonValue.toFixed(2));
    const roundedCurrentInvestPrice = parseFloat(currentInvestPrice.toFixed(2));
    const roundedCurrentSellPrice = parseFloat(currentSellPrice.toFixed(2));

    console.log(
      "roundedWonValue:",
      roundedWonValue,
      "roundedCurrentInvestPrice:",
      roundedCurrentInvestPrice
    );
    console.log(
      "roundedVendWonValue:",
      roundedVendWonValue,
      "roundedCurrentSellPrice:",
      roundedCurrentSellPrice
    );

    if (roundedWonValue === roundedCurrentInvestPrice) {
      setShowClander(false);
    } else {
      setShowClander(true);
    }
  }, [wonValue, currentInvestPrice]);

  // 캘린더 표시 로직
  useEffect(() => {
    const roundedVendWonValue = parseFloat(vendWonValue.toFixed(2));
    const roundedCurrentSellPrice = parseFloat(currentSellPrice.toFixed(2));
    if (roundedVendWonValue === roundedCurrentSellPrice) {
      setShowClander(false);
    } else {
      setShowClander(true);
    }
  }, [vendWonValue, currentSellPrice]);

  // 스크롤 및 고정 로직
  const scrollToSection = (sectionName) => {
    const section = document.querySelector(`div[name="${sectionName}"]`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const recommandSection = document.querySelector(
        `div[name="recommand-section"]`
      );
      if (recommandSection) {
        const sectionTop = recommandSection.getBoundingClientRect().top;
        setIsFixed(sectionTop <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 예약 카드 클릭 시 호출 함수
  const handleReservedCardClick = (index) => {
    const selectedTransaction = transactionHistory[index];
    setSelectedTransaction({ ...selectedTransaction, index });

    setModalType("ReservedModal");
    onOpen();
  };

  // 수정된 handlePurchaseClick 함수
  const handlePurchaseClick = () => {
    let transactionType = selected ? "buy" : "sell";
    let fromAccountNumber = selected ? "하나저축예금" : "하나밀리언달러통장";
    let toAccountNumber = selected ? "하나밀리언달러통장" : "하나저축예금";
    let withdrawalAmount = 0; // ReserveModal일 경우 기본값 0
    let depositAmount = 0; // ReserveModal일 경우 기본값 0
    let reservationPeriod = "";

    // 선택 상태에 따라 requestAmount 설정
    const requestAmount = selected
      ? parseFloat(wonValue)
      : parseFloat(vendWonValue);

    // 입력값 검증
    if (isNaN(requestAmount) || requestAmount <= 0) {
      alert("유효한 금액을 입력해 주세요.");
      return;
    }

    if (!showClander) {
      const currentValue = selected ? wonValue : vendWonValue;
      const currentDate = new Date().toISOString().split("T")[0];
      setTransactionHistory((prevHistory) => [
        ...prevHistory,
        {
          value: currentValue,
          date: currentDate,
          type: transactionType,
          rangeDate: value,
          exchangeValue: exchangeValue,
          requestAmount: requestAmount, // 거래 내역에 requestAmount 추가
        },
      ]);
    }

    const roundedWonValue = parseFloat(wonValue.toFixed(2));
    const roundedCurrentInvestPrice = parseFloat(currentInvestPrice.toFixed(2));
    const roundedVendWonValue = parseFloat(vendWonValue.toFixed(2));
    const roundedCurrentSellPrice = parseFloat(currentSellPrice.toFixed(2));

    if (
      (selected && roundedWonValue === roundedCurrentInvestPrice) ||
      (!selected && roundedVendWonValue === roundedCurrentSellPrice)
    ) {
      // 즉시 거래 로직
      setModalType("DirectModal");
      reservationPeriod = "NONE";

      withdrawalAmount = selected ? calculatedValue : exchangeValue;
      depositAmount = selected ? exchangeValue : calculatedValue;

      // 트랜잭션 데이터 생성
      const transactionData = {
        user_id: user.user_id,
        from_account_number: fromAccountNumber,
        to_account_number: toAccountNumber,
        withdrawal_amount: withdrawalAmount,
        deposit_amount: depositAmount,
        currency_code: changeState,
        transaction_type: transactionType,
        conclusion_status: "completed",
        reservation_period: reservationPeriod,
        request_amount: requestAmount, // exchangeValue 대신 requestAmount 사용
      };

      // 데이터 전송
      axios
        .post("http://localhost:8082/api/trinsert", transactionData)
        .then((response) => {
          console.log("Transaction inserted:", response.data);
        })
        .catch((error) => {
          console.error("Error inserting transaction:", error);
        });
    } else {
      // 예약 거래 로직
      console.log("Passing value to ReserveModal:", value);
      setModalType("ReserveModal");

      withdrawalAmount = selected ? calculatedValue : exchangeValue;
      depositAmount = selected ? exchangeValue : calculatedValue;
      reservationPeriod = formatDateRange(value);

      // 예약 트랜잭션 데이터 생성
      const reserveTransactionData = {
        user_id: user.user_id,
        from_account_number: fromAccountNumber,
        to_account_number: toAccountNumber,
        withdrawal_amount: withdrawalAmount,
        deposit_amount: depositAmount,
        currency_code: changeState,
        transaction_type: transactionType,
        conclusion_status: "reserved",
        reservation_period: reservationPeriod,
        request_amount: requestAmount, // exchangeValue 대신 requestAmount 사용
      };

      // 데이터 전송
      axios
        .post("http://localhost:8082/api/trinsert", reserveTransactionData)
        .then((response) => {
          console.log("Reserve transaction inserted:", response.data);
        })
        .catch((error) => {
          console.error("Error inserting reserve transaction:", error);
        });
    }
  };

  // ReservedModal에서 트랜잭션 업데이트 후 서버로 PUT 요청
  const handleTransactionUpdate = (updatedTransaction) => {
    const transactionToUpdate = {
      ...updatedTransaction,
      reservation_period: updatedTransaction.reservation_period || "",
    };

    axios
      .put("http://localhost:8082/api/updateTransaction", transactionToUpdate)
      .then((response) => {
        console.log("Transaction updated:", response.data);
      })
      .catch((error) => {
        console.error("Error updating transaction:", error);
      });

    onClose();
  };

  // Modal 타입 변경 함수
  const handleSelectClick = () => {
    setModalType("SelectModal");

    // 서버에서 예약된 거래 내역 가져오기
    axios
      .get("http://localhost:8082/api/reserved")
      .then((response) => {
        setTransactionHistory(response.data);
      })
      .catch((error) => {
        console.error("Error fetching reserved transactions:", error);
      });
  };

  // FxModal로 돌아가는 기능 추가
  const handleBackToFxModal = () => {
    setModalType("FxModal");
  };

  // AIModal에서 닫기 버튼 클릭 시 FxModal로 변경
  const handleClose = () => {
    setModalType("FxModal");
    onClose(); // 모달 닫기
  };

  // console.log(showClander);
  if (!isPriceLoading) return <div>로딩중입니다.</div>;
  // console.log("mainpage : ", user);
  // ai image hover logic
  const handleMouseEnter = () => {
    setIsHovered(true); // hover 상태를 true로 설정
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // hover 상태를 false로 설정
  };
  // 데이터 변환 함수: baserate -> 매매기준율, price -> 최저가-최고가

  return (
    <div className='w-full h-full relative flex justify-center'>
    <div className="w-[960px] flex flex-col py-1 px-10">
      {loading ? <Loading /> : null}
      {/* 살 때 팔 때 섹션 */}
      <div
        className="w-full px-48 py-2 rounded-lg my-2 bg-white"
        style={{ boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="flex justify-center items-center my-3 gap-1">
          <MainDropDown
            changeState={changeState}
            setChangeState={setChangeState}
          />
          <Text className="text px-3 border-2 text-slate-600 border-green-500 rounded-full">
            Lv3 우대 80%
          </Text>
          {/* Popover 관련 아이콘 및 트리거 */}
          <LevelPopover />
        </div>

        <BuySell
          currentInvestPrice={currentInvestPrice}
          currentSellPrice={currentSellPrice}
          originInvestPrice={originInvestPrice}
          originSellPrice={originSellPrice}
          increase={increase}
        />
      </div>

      {/* 메인 차트 섹션 */}
      <div
        className="flex flex-col items-center bg-white rounded-lg py-5"
        style={{ boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="flex justify-end w-full px-16 mt-2 gap-2">
          <div className="flex gap-1">
            <Text className="text-slate-500">
              고시회차 {todayData[todayData.length - 1]?.period || "정보 없음"}
            </Text>
          </div>
          <div className="flex items-center gap-1">
            <Text className="text-slate-500">
              {todayData[todayData.length - 1]?.time || "정보 없음"}
            </Text>
            <IoReload className="text-slate-500" />
          </div>
        </div>

        {/* 메인 차트 데이터 전달 */}
        <MainChart
          id={id}
          changeState={changeState}
          consumData={consumData}
          todayData={todayData}
        />

        {/* 최고가 최저가 표시 */}
        <div className="flex gap-3 py-1">
          <div className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: "#b6e9e5" }}
            ></div>
            <Text>최저가-최고가</Text>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-4 h-4 border-2 rounded-full"
              style={{ backgroundColor: "#b6e9e5", borderColor: "#32B3B7" }}
            ></div>
            <Text>매매기준율(종가)</Text>
          </div>
        </div>
      </div>

      {/* 구매 및 판매 버튼 섹션 */}
      <div
        className="flex justify-center py-2 bg-white gap-6 my-2 rounded-lg"
        style={{ boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" }}
      >
        <button
          onClick={onOpen}
          className="text-white bt-background px-4 py-2 rounded hover:bg-white hover:border hover:border-[#009577] hover:text-[#009577] transition-all"
          style={{ height: "42px", width: "200px" }}
        >
          살래요
        </button>
        <SelectButton onOpen={onOpen} handleSelectClick={handleSelectClick} />
 
        <button
          onClick={handleAIModalOpen}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="text-white bt-background px-3 rounded-full hover:border hover:border-[#009577] hover:bg-white transition-all"
          style={{ height: "42px", width: "42px" }}
        >
          <Image
            src={
              isHovered ? "/image/ai_icon_reverse.png" : "/image/ai_icon2.png"
            }
            boxSize="20px"
            objectFit="cover"
          />
        </button>
      </div>

      {/* 추천 섹션 */}
      <div
        name="recommand-section"
        className="py-5 flex mt-1"
        style={{ overflow: "visible" }}
      >
        {isFixed && (
          <div
            name="fake-section"
            className="bg-slate-50 px-5 py-5 mr-3 flex-none w-[120px]"
          ></div>
        )}
        {/* 왼쪽 섹션 */}
        <div
          name="left-section"
          className={`bg-slate-50 py-5 mr-3 flex-none w-[120px] ${
            isFixed ? "fixed top-0 z-10" : ""
          }`}
          style={{ top: isFixed ? "10px" : "auto" }}
        >
          <div className="flex items-center mb-3">
            <Text className="mr-1 font-semibold">USD/KRW</Text>
            <Image boxSize={"20px"} src="/image/usd_flag.png"></Image>
          </div>
          <div>
            {/* 투자포인트 섹션 */}
            <div
              className={`flex items-center transition-all duration-300 ${
                selectedSection === "투자포인트"
                  ? "bg-green-700 text-white"
                  : ""
              }`}
              onClick={() => handleSelect("투자포인트")}
            >
              <MainRecommandButton
                text={"투자포인트"}
                scrollToSection={() => scrollToSection("1-1")}
              />
              <CgSearchFound
                className={`transition-all duration-300 ${
                  selectedSection === "투자포인트" ? "text-white" : ""
                }`}
                style={{ marginBottom: "3px" }}
              />
            </div>

            {/* 외환리포트 섹션 */}
            <div
              className={`flex items-center transition-all duration-300 ${
                selectedSection === "외환리포트"
                  ? "bg-green-700 text-white"
                  : ""
              }`}
              onClick={() => handleSelect("외환리포트")}
            >
              <MainRecommandButton
                text={"외환리포트"}
                scrollToSection={() => scrollToSection("1-2")}
              />
              <TbReport
                className={`transition-all duration-300 ${
                  selectedSection === "외환리포트" ? "text-white" : ""
                }`}
                style={{ marginBottom: "3px" }}
              />
            </div>

            {/* 금융시장전망 섹션 */}
            <div
              className={`flex items-center transition-all duration-300 ${
                selectedSection === "금융시장전망"
                  ? "bg-green-700 text-white"
                  : ""
              }`}
              onClick={() => handleSelect("금융시장전망")}
            >
              <MainRecommandButton
                text={"금융시장전망"}
                scrollToSection={() => scrollToSection("1-3")}
              />
              <HiOutlineDocumentReport
                className={`transition-all duration-300 ${
                  selectedSection === "금융시장전망" ? "text-white" : ""
                }`}
                style={{ marginBottom: "3px" }}
              />
            </div>
          </div>
        </div>
        {/* 오른쪽 섹션 */}
        <div name="right-section" className="bg-slate-50 flex-1">
          <div
            name="1-1"
            className="h-[450px] rounded-xl mt-2 py-5 px-2"
            style={{ boxShadow: "0 3px 13px rgba(0, 0, 0, 0.1)" }}
          >
            <Text className="text-xl font-semibold leading-0 px-5">
              추천포인트 3가지
            </Text>
            <div className="border border-slate-300 mx-4 mt-4"></div>
            <div className="flex justify-around mt-8">
              <PointBox
                title={investPointMapper[0].title}
                content={investPointMapper[0].content}
              />
              <PointBox
                title={investPointMapper[1].title}
                content={investPointMapper[1].content}
              />
              <PointBox
                title={investPointMapper[2].title}
                content={investPointMapper[2].content}
              />
            </div>
          </div>
          <div
            name="1-2"
            className="h-[650px] rounded-xl mt-2 py-5 px-2"
            style={{ boxShadow: "0 3px 13px rgba(0, 0, 0, 0.1)" }}
          >
            <Text className="text-xl font-semibold leading-0 px-5">
              외환리포트
            </Text>
            <div className="border border-slate-300 mx-4 mt-4"></div>
            <ReportViewer />
          </div>
          <div
            name="1-3"
            className="rounded-xl h-[650px] mt-2 py-5 px-2"
            style={{ boxShadow: "0 3px 13px rgba(0, 0, 0, 0.1)" }}
          >
            <Text className="text-xl font-semibold leading-0 px-5">
              금융시장전망
            </Text>
            <div className="border border-slate-300 mx-4 mt-4"></div>
            <div className="mt-2">
              <Text className="mx-4 text-sm">
                24년 들어, 인플레이션 지속적으로 둔회되는 가운데 고금리 장기화
                여파 속 4분기 시점 美 냉각 가시화 될 것으로 예상
              </Text>
              <Text className="mx-4 text-sm">
                국내외 물가지표 및 글로벌 경제의 점진적 둔화에 따른 달러 약세
                영향 속 금리와 환율은 점차 하락하는 모습을 보일 것으로 전망
              </Text>
            </div>

            <FinanceReportTable />
            <div className="flex">
              <FinanceReportSummary />
              <GdpCard />
              <Text className='text-slate-570 text-sm'>자료 : 하나은행, 하나금융경제연구소</Text>
            </div>
            
          </div>
        </div>
      </div>

      {/* 모달 섹션 */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
        <ModalOverlay />
        {modalType === "FxModal" && (
          <FxModal
            selected={selected}
            handleToggle={handleToggle}
            format={format}
            parse={parse}
            wonValue={wonValue}
            vendWonValue={vendWonValue}
            setWonValue={setWonValue}
            setVendWonValue={setVendWonValue}
            exchangeValue={exchangeValue}
            setExchangeValue={setExchangeValue}
            calculatedValue={calculatedValue}
            onClose={onClose}
            onPurchaseClick={handlePurchaseClick} // 구매 버튼 핸들러
            showClander={showClander}
            value={value}
            setValue={setValue}
            handleSetValue={handleSetValue}
            changeState={changeState}
            setChangeState={setChangeState}
            currentInvestPrice={currentInvestPrice}
            currentSellPrice={currentSellPrice}
            originSellPrice={originSellPrice}
          />
        )}
        {modalType === "DirectModal" && (
          <DireactModal
            onClose={onClose}
            onPurchaseClick={handleBackToFxModal}
            // 달러 몇 개
            exchangeValue={exchangeValue}
            // 환산 금액
            calculatedValue={calculatedValue}
            // 살래요 금액
            currentInvestPrice={currentInvestPrice}
            // 팔래요 금액
            currentSellPrice={currentSellPrice}
            // 살래요/팔래요 구분 여부
            selected={selected}
            // 현재 통화
            changeState={changeState}
            // 날짜 초기화
            handleSetValue={handleSetValue}
          />
        )}
        {modalType === "ReserveModal" && (
          <ReserveModal
            onClose={onClose}
            onPurchaseClick={handleBackToFxModal}
            // 날짜
            value={value}
            // 달러 몇 개
            exchangeValue={exchangeValue}
            // 환산 금액
            calculatedValue={calculatedValue}
            // 살래요 금액
            currentInvestPrice={currentInvestPrice}
            // 팔래요 금액
            currentSellPrice={currentSellPrice}
            // 살래요/팔래요 구분 여부
            selected={selected}
            // 현재 통화
            changeState={changeState}
            // 날짜 초기화
            handleSetValue={handleSetValue}
          />
        )}
        {modalType === "SelectModal" && (
          <SelectModal
            onClose={onClose}
            onPurchaseClick={handleBackToFxModal}
            transactionHistory={transactionHistory}
            handleReservedCardClick={handleReservedCardClick}
            changeState={changeState}
            setChangeState={setChangeState}
            handleBackToFxModal={handleBackToFxModal}
          />
        )}
        {modalType === "ReservedModal" && selectedTransaction && (
          <ModifyModal
            selectedTransaction={selectedTransaction}
            onClose={onClose}
            handleTransactionUpdate={handleTransactionUpdate}
            handleBackToFxModal={handleBackToFxModal}
          />
        )}
        {modalType === "AIModal" && (
          <AiModal
            onClose={handleClose}
            aiData={aiData} // AIModal에 데이터 전달
          />
        )}
      </Modal>
    </div>
  </div>
  );
};

export default MainPageDetail;
