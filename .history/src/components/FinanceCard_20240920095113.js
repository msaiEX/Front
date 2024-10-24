import React from 'react'

const FinanceCard = ({ title, year2023, value2023, year2024, value2024, unit }) => {
  return (
    <div
      className='rounded-lg w-[180px] px-5 pt-2 pb-3 text-center mx-2'
      style={{
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
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
