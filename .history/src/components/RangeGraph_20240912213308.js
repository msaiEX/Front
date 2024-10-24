import React from 'react';
import '../css/style.css';

const RangeGraph = ({ min, max, avg }) => {
  // 평균 값의 위치를 퍼센트로 계산
  const avgPosition = ((avg - min) / (max - min)) * 100;

  return (
    <div className="graph-container">
      <div className="line">
        <div className="min-marker"></div>
        <div className="avg-marker" style={{ left: `${avgPosition}%` }}></div>
        <div className="max-marker"></div>
      </div>
      <div className="labels">
        <span className="min-label">최저: {min}</span>
        <span className="avg-label" style={{ left: `${avgPosition}%` }}>평균: {avg}</span>
        <span className="max-label">최고: {max}</span>
      </div>
    </div>
  );
};

export default RangeGraph;
