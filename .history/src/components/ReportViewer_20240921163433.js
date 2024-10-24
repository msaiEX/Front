import React, { useState } from "react";
import ReportSection from './ReportSection'; // ReportSection 컴포넌트 import
import { reportPointMapper } from '../data/reportPointMapper';
import { IoMdDownload } from "react-icons/io";

const ReportViewer = () => {
  // 상태 추가: 버튼에 따라 보여줄 데이터를 관리
  const [selectedReport, setSelectedReport] = useState(reportPointMapper.semi2024);
  const [activeButton, setActiveButton] = useState('year'); // 클릭된 버튼 상태 저장
  const [reportTitle, setReportTitle] = useState('연간 리포트 요약'); // 리포트 제목

  // 파일 다운로드 링크 (서버에서 호스팅된 PDF 파일 경로를 추가)
  const fileLinks = {
    year: '/pdf/semi2024.pdf',
    month: '/pdf/Monthly2409.pdf',
    week: '/pdf/Weekly240909.pdf',
    day: '/pdf/Daily240913.pdf'
  };

  // 버튼 클릭 핸들러: 보고서를 선택
  const handleReportChange = (reportType) => {
    setActiveButton(reportType); // 클릭된 버튼을 active 상태로 설정

    switch (reportType) {
      case 'year':
        setSelectedReport(reportPointMapper.semi2024);
        setReportTitle('연간 리포트 요약');
        break;
      case 'month':
        setSelectedReport(reportPointMapper.Monthly2409);
        setReportTitle('월간 리포트 요약');
        break;
      case 'week':
        setSelectedReport(reportPointMapper.Weekly240909);
        setReportTitle('주간 리포트 요약');
        break;
      case 'day':
        setSelectedReport(reportPointMapper.Daily240913);
        setReportTitle('일간 리포트 요약');
        break;
      default:
        setSelectedReport(reportPointMapper.semi2024);
        setReportTitle('연간 리포트 요약');
    }
  };

  return (
    <div className="w-full px-5">
      {/* 버튼 섹션 */}
      <div className="flex justify-center bg-[#d6e1fd] my-4">
        <button
          onClick={() => handleReportChange('year')}
          className={`w-[25%] px-2 py-2 rounded ${activeButton === 'year' ? 'bg-white border border-blue-700 text-blue-700' : 'bg-[#f1f3f8] text-slate-700'}`}
        >
          Year Report
        </button>
        <button
          onClick={() => handleReportChange('month')}
          className={`w-[25%] px-2 py-2 rounded ${activeButton === 'month' ? 'bg-white border border-blue-700 text-blue-700' : 'bg-[#f1f3f8] text-slate-700'}`}
        >
          Month Report
        </button>
        <button
          onClick={() => handleReportChange('week')}
          className={`w-[25%] px-2 py-2 rounded ${activeButton === 'week' ? 'bg-white border border-blue-700 text-blue-700' : 'bg-[#f1f3f8] text-slate-700'}`}
        >
          Week Report
        </button>
        <button
          onClick={() => handleReportChange('day')}
          className={`w-[25%] px-2 py-2 rounded ${activeButton === 'day' ? 'bg-white border border-blue-700 text-blue-700' : 'bg-[#f1f3f8] text-slate-700'}`}
        >
          Day Report
        </button>
      </div>

      {/* 선택된 보고서 데이터를 보여줄 영역 */}
      <div name="1-2" className="bg-blue-50 h-[400px] rounded-xl mt-6 py-10 px-2">
        
        {/* ReportSection 컴포넌트를 통해 데이터를 표시 */}
        <ReportSection reportData={selectedReport} title={reportTitle} />
      </div>

      {/* 파일 다운로드 섹션 */}
      <div className="flex mt-6 gap-2">
        <a
          href={fileLinks['year']} // 버튼에 맞는 파일 링크 사용
          download // 다운로드 속성 추가
          className="px-4 py-2 gap-1 bg-blue-200 text-blue-600 rounded flex items-center"
        >
          반기상황
          <IoMdDownload />
        </a>
        <a
          href={fileLinks['month']} // 버튼에 맞는 파일 링크 사용
          download // 다운로드 속성 추가
          className="px-4 py-2 gap-1 bg-blue-200 text-blue-600 rounded flex items-center"
        >
          월간사황
          <IoMdDownload />
        </a>
        <a
          href={fileLinks['week']} // 버튼에 맞는 파일 링크 사용
          download // 다운로드 속성 추가
          className="px-4 py-2 gap-1 bg-blue-200 text-blue-600 rounded flex items-center"
        >
          주간사황
          <IoMdDownload />
        </a>
        <a
          href={fileLinks['day']} // 버튼에 맞는 파일 링크 사용
          download // 다운로드 속성 추가
          className="px-4 py-2 gap-1 bg-blue-200 text-blue-600 rounded flex items-center"
        >
          일일사황
          <IoMdDownload />
        </a>
      </div>
    </div>
  );
};

export default ReportViewer;
