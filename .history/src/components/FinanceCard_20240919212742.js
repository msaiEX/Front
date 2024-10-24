import React from 'react'

const FinanceCard = ({ title, year2023, value2023, year2024, value2024, unit }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        padding: "16px",
        width: "200px",
        textAlign: "center",
        margin: "0 10px", // 카드 간 간격을 주기 위한 마진
      }}
    >
      <div style={{ backgroundColor: "#319795", padding: "8px", borderRadius: "8px", marginBottom: "16px" }}>
        <span style={{ fontSize: "18px", fontWeight: "bold", color: "#fff" }}>
          {title}
        </span>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "0 16px", marginBottom: "8px" }}>
          <span style={{ fontSize: "16px", fontWeight: "bold" }}>
            {year2023}
          </span>
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>
            {value2023}
            {unit}
          </span>
        </div>
        <hr />
        <div style={{ display: "flex", justifyContent: "space-between", padding: "0 16px", marginTop: "8px" }}>
          <span style={{ fontSize: "16px", fontWeight: "bold" }}>
            {year2024}
          </span>
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>
            {value2024}
            {unit}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FinanceCard
