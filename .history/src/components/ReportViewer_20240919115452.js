// import React, { useState } from "react";
// import ReportSection from './ReportSection'; // ReportSection 컴포넌트 import
// import { reportPointMapper } from '../data/reportPointMapper';
// import {
//   Divider,
// } from "@chakra-ui/react";
// const ReportViewer = () => {
//   // 상태 추가: 버튼에 따라 보여줄 데이터를 관리
//   const [selectedReport, setSelectedReport] = useState(reportPointMapper.semi2024);

//   // 버튼 클릭 핸들러: 보고서를 선택
//   const handleReportChange = (reportType) => {
//     switch (reportType) {
//       case 'year':
//         setSelectedReport(reportPointMapper.semi2024);
//         break;
//       case 'month':
//         setSelectedReport(reportPointMapper.Monthly2409);
//         break;
//       case 'week':
//         setSelectedReport(reportPointMapper.Weekly240909);
//         break;
//       case 'day':
//         setSelectedReport(reportPointMapper.Daily240913);
//         break;
//       default:
//         setSelectedReport(reportPointMapper.semi2024);
//     }
//   };

//   return (
//     <div className="w-full px-5">
//       {/* 버튼 섹션 */}
//       <div className="flex justify-center gap-1 my-4">
//         <button
//           onClick={() => handleReportChange('year')}
//           className="w-[25%] px-2 py-2 bg-[#f1f3f8] text-white rounded"
//         >
//           Year Report
//         </button>
//         <button
//           onClick={() => handleReportChange('month')}
//           className="w-[25%] px-2 py-2 bg-[#f1f3f8] text-white rounded"
//         >
//           Month Report
//         </button>
//         <button
//           onClick={() => handleReportChange('week')}
//           className="w-[25%] px-2 py-2 bg-[#f1f3f8] text-white rounded"
//         >
//           Week Report
//         </button>
//         <button
//           onClick={() => handleReportChange('day')}
//           className="w-[25%] px-2 py-2 bg-[#f1f3f8] text-white rounded"
//         >
//           Day Report
//         </button>
//       </div>

//       {/* 선택된 보고서 데이터를 보여줄 영역 */}
//       <div name="1-2" className="bg-slate-200 h-[400px] rounded-xl mt-6 py-3 px-2">
//         <Divider className="my-3" orientation="horizontal" />
        
//         {/* ReportSection 컴포넌트를 통해 데이터를 표시 */}
//         <ReportSection reportData={selectedReport} title="보고서 내용" />
//       </div>
//     </div>
//   );
// };

// export default ReportViewer;
import React, { useState } from "react";
import ReportSection from './ReportSection'; // ReportSection 컴포넌트 import
import { reportPointMapper } from '../data/reportPointMapper';
import { Divider } from "@chakra-ui/react";

const ReportViewer = () => {
  // 상태 추가: 버튼에 따라 보여줄 데이터를 관리
  const [selectedReport, setSelectedReport] = useState(reportPointMapper.semi2024);
  const [activeButton, setActiveButton] = useState('year'); // 클릭된 버튼 상태 저장
  const [reportTitle, setReportTitle] = useState('연간 리포트 요약'); // 리포트 제목

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
      <div className="flex justify-center gap-1 my-4">
        <button
          onClick={() => handleReportChange('year')}
          className={`w-[25%] px-2 py-2 rounded ${activeButton === 'year' ? 'bg-[#d6e1fd] text-blue-600' : 'bg-[#f1f3f8] text-slate-700'}`}
        >
          Year Report
        </button>
        <button
          onClick={() => handleReportChange('month')}
          className={`w-[25%] px-2 py-2 rounded ${activeButton === 'month' ? 'bg-[#d6e1fd] text-blue-600' : 'bg-[#f1f3f8] text-slate-700'}`}
        >
          Month Report
        </button>
        <button
          onClick={() => handleReportChange('week')}
          className={`w-[25%] px-2 py-2 rounded ${activeButton === 'week' ? 'bg-[#d6e1fd] text-blue-600' : 'bg-[#f1f3f8] text-slate-700'}`}
        >
          Week Report
        </button>
        <button
          onClick={() => handleReportChange('day')}
          className={`w-[25%] px-2 py-2 rounded ${activeButton === 'day' ? 'bg-[#d6e1fd] text-blue-600' : 'bg-[#f1f3f8] text-slate-700'}`}
        >
          Day Report
        </button>
      </div>

      {/* 선택된 보고서 데이터를 보여줄 영역 */}
      <div name="1-2" className="bg-slate-200 h-[400px] rounded-xl mt-6 py-3 px-2">
        <Divider className="my-3" orientation="horizontal" />

        {/* ReportSection 컴포넌트를 통해 데이터를 표시 */}
        <ReportSection reportData={selectedReport} title={reportTitle} />
      </div>
    </div>
  );
};

export default ReportViewer;
