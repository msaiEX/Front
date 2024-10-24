import React from 'react'
import FinanceCard from './FinanceCard';

const FinanceReportSummary = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "24px" }}>
      {/* 달러/원 환율 카드 */}
      <FinanceCard
        title="달러/원 환율"
        year2023="2023"
        value2023="1,305"
        year2024="2024"
        value2024="1,275"
        unit="원"
      />
      {/* 국고채 금리 카드 */}
      <FinanceCard
        title="국고채 금리"
        year2023="2023"
        value2023="3.62"
        year2024="2024"
        value2024="3.51"
        unit="%"
      />
    </div>
  );
};

export default FinanceReportSummary