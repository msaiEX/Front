// src/App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

/**
 * Header 컴포넌트
 * 사이트의 상단 네비게이션 바를 구성합니다.
 */
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* 로고 */}
        <Link to="/">
          <img src="/logo.png" alt="HanaFind Logo" className="h-10" />
        </Link>
        {/* 네비게이션 링크 */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-teal-500">홈</Link>
          <Link to="/jobs" className="text-gray-700 hover:text-teal-500">채용 정보</Link>
          <Link to="/about" className="text-gray-700 hover:text-teal-500">회사 소개</Link>
          <Link to="/contact" className="text-gray-700 hover:text-teal-500">문의하기</Link>
        </nav>
        {/* 모바일 메뉴 아이콘 (추후 구현 가능) */}
        <div className="md:hidden">
          {/* 모바일 메뉴 아이콘을 추가할 수 있습니다 */}
        </div>
      </div>
    </header>
  );
};

/**
 * Hero 섹션 컴포넌트
 * 페이지의 주요 배너 섹션을 구성합니다.
 */
const Hero = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/hero-background.jpg")' }}>
      <div className="bg-black bg-opacity-50 p-10 rounded-md text-center">
        <h1 className="text-4xl font-bold text-white mb-4">당신의 꿈을 찾아드립니다</h1>
        <p className="text-lg text-gray-200 mb-6">다양한 채용 정보를 통해 적합한 직장을 찾아보세요.</p>
        <Link to="/jobs">
          <button className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600 transition-colors">
            채용 정보 보기
          </button>
        </Link>
      </div>
    </section>
  );
};

/**
 * JobSearch 컴포넌트
 * 사용자로부터 검색어를 입력받아 필터링된 채용 정보를 제공합니다.
 */
const JobSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="max-w-3xl mx-auto my-10 px-4">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="직무, 회사, 키워드로 검색하세요..."
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          🔍
        </span>
      </div>
    </div>
  );
};

/**
 * JobList 컴포넌트
 * 채용 정보를 리스트 형태로 표시하며, 페이드인 애니메이션을 적용합니다.
 */
const JobList = ({ jobs }) => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      {jobs.map((job, index) => (
        <div
          key={index}
          className="flex items-center p-6 mb-4 bg-white rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105 animate-fadein"
        >
          <img src={job.companyLogo} alt={`${job.company} 로고`} className="w-16 h-16 mr-6 object-contain" />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{job.title}</h2>
            <p className="text-gray-600">{job.company} - {job.location}</p>
            <p className="text-gray-500 mt-2">{job.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

/**
 * ToggleButtonGroup 컴포넌트
 * 시간 범위를 선택할 수 있는 버튼 그룹을 구성하며, 페이드인 애니메이션을 적용합니다.
 */
const ToggleButtonGroup = () => {
  const [timeRange, setTimeRange] = useState("1D");
  const ranges = ["1D", "1M", "3M", "6M", "1Y"];

  return (
    <div className="w-full flex justify-center my-8">
      <div className="relative w-[360px] py-1 rounded-md flex justify-center items-center bg-slate-200">
        {/* 배경 애니메이션 블록 */}
        <div
          className={`absolute top-0 left-0 h-full w-1/5 bg-white rounded transition-transform duration-500 ease-in-out transform ${
            timeRange === "1D"
              ? "translate-x-0"
              : timeRange === "1M"
              ? "translate-x-1/5"
              : timeRange === "3M"
              ? "translate-x-2/5"
              : timeRange === "6M"
              ? "translate-x-3/5"
              : "translate-x-4/5"
          }`}
          style={{
            border: "1px solid #0077b6",
            zIndex: -1,
          }}
        ></div>

        {/* 버튼 그룹 */}
        {ranges.map((range) => (
          <button
            key={range}
            className={`z-10 px-4 py-2 text-gray-700 rounded transition-colors duration-300 ease-in-out ${
              timeRange === range ? "text-gray-800" : "text-gray-500"
            }`}
            onClick={() => setTimeRange(range)}
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  );
};

/**
 * Footer 컴포넌트
 * 사이트의 하단에 위치하며, 추가적인 링크와 정보를 제공합니다.
 */
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between">
        {/* 회사 정보 */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2">HanaFind</h3>
          <p className="text-gray-400">© 2024 HanaFind. All rights reserved.</p>
        </div>
        {/* 네비게이션 링크 */}
        <div className="flex space-x-6">
          <Link to="/" className="text-gray-400 hover:text-teal-500">홈</Link>
          <Link to="/jobs" className="text-gray-400 hover:text-teal-500">채용 정보</Link>
          <Link to="/about" className="text-gray-400 hover:text-teal-500">회사 소개</Link>
          <Link to="/contact" className="text-gray-400 hover:text-teal-500">문의하기</Link>
        </div>
      </div>
    </footer>
  );
};

/**
 * HomePage 컴포넌트
 * 홈페이지 전체를 구성하는 컴포넌트입니다.
 */
const HomePage = () => {
  const [jobs, setJobs] = useState([
    // 예시 데이터, 실제 데이터는 API 호출 등을 통해 가져와야 합니다.
    {
      id: 1,
      title: "프론트엔드 개발자",
      company: "HanaTech",
      location: "서울",
      companyLogo: "/images/company1.png",
      description: "React를 이용한 웹 애플리케이션 개발",
    },
    {
      id: 2,
      title: "백엔드 개발자",
      company: "HanaTech",
      location: "부산",
      companyLogo: "/images/company2.png",
      description: "Node.js를 이용한 서버 개발",
    },
    {
      id: 3,
      title: "디자인 디렉터",
      company: "HanaDesign",
      location: "서울",
      companyLogo: "/images/company3.png",
      description: "UX/UI 디자인 및 팀 관리",
    },
    {
      id: 4,
      title: "데이터 분석가",
      company: "HanaData",
      location: "인천",
      companyLogo: "/images/company4.png",
      description: "데이터 분석 및 시각화 작업",
    },
    {
      id: 5,
      title: "마케팅 매니저",
      company: "HanaMarketing",
      location: "대구",
      companyLogo: "/images/company5.png",
      description: "마케팅 전략 기획 및 실행",
    },
    // 추가적인 채용 정보
  ]);

  const [filteredJobs, setFilteredJobs] = useState(jobs);

  /**
   * 검색어에 따라 채용 정보를 필터링하는 함수
   * @param {string} query - 검색어
   */
  const handleSearch = (query) => {
    if (!query) {
      setFilteredJobs(jobs);
      return;
    }
    const lowerQuery = query.toLowerCase();
    const filtered = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(lowerQuery) ||
        job.company.toLowerCase().includes(lowerQuery) ||
        job.location.toLowerCase().includes(lowerQuery)
    );
    setFilteredJobs(filtered);
  };

  return (
    <>
      <Header />
      <Hero />
      <JobSearch onSearch={handleSearch} />
      <JobList jobs={filteredJobs} />
      <ToggleButtonGroup />
      <Footer />
    </>
  );
};

/**
 * FadeIn 애니메이션을 Tailwind CSS에 추가하기 위해 index.css에 다음 코드를 추가해야 합니다.
 * 
 * @keyframes fadein {
 *   from {
 *     opacity: 0;
 *   }
 *   to {
 *     opacity: 1;
 *   }
 * }
 * 
 * .animate-fadein {
 *   animation: fadein 1s ease-in-out forwards;
 * }
 */
