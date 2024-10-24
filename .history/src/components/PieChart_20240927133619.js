// import React, { useState, useEffect } from "react";
// import { PieChart, Pie, Sector, Cell } from "recharts";

// const renderActiveShape = (props) => {
//   const RADIAN = Math.PI / 180;
//   const {
//     cx,
//     cy,
//     midAngle,
//     innerRadius,
//     outerRadius,
//     startAngle,
//     endAngle,
//     fill,
//     payload,
//     percent,
//     value,
//   } = props;
//   const sin = Math.sin(-RADIAN * midAngle);
//   const cos = Math.cos(-RADIAN * midAngle);
//   const sx = cx + (outerRadius + 10) * cos;
//   const sy = cy + (outerRadius + 10) * sin;
//   const mx = cx + (outerRadius + 30) * cos;
//   const my = cy + (outerRadius + 30) * sin;
//   const ex = mx + (cos >= 0 ? 1 : -1) * 22;
//   const ey = my;
//   const textAnchor = cos >= 0 ? "start" : "end";

//   return (
//     <g>
//       <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
//         {payload.name}
//       </text>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />
//       <Sector
//         cx={cx}
//         cy={cy}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         innerRadius={outerRadius + 6}
//         outerRadius={outerRadius + 10}
//         fill={fill}
//       />
//       <path
//         d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
//         stroke={fill}
//         fill="none"
//       />
//       <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         textAnchor={textAnchor}
//         fill="#333"
//       >{`PV ${value}`}</text>
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         dy={18}
//         textAnchor={textAnchor}
//         fill="#999"
//       >
//         {`(Rate ${(percent * 100).toFixed(2)}%)`}
//       </text>
//     </g>
//   );
// };

// const Example = ({ accountsData }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     if (accountsData && accountsData.length > 0) {
//       // accountsData에서 usd, jpy, eur 데이터를 추출
//       const currenciesData = [
//         {
//           name: "USD",
//           value: parseFloat(accountsData[1].usd) * 1316.95,
//           color: "#0088FE",
//         },
//         {
//           name: "JPY",
//           value: parseFloat(accountsData[1].jpy) * 900,
//           color: "#00C49F",
//         },
//         {
//           name: "EUR",
//           value: parseFloat(accountsData[1].eur) * 1508,
//           color: "#FFBB28",
//         },
//       ];

//       const filteredData = currenciesData.filter(
//         (currency) => currency.value > 0
//       );
//       setData(filteredData);
//     }
//   }, [accountsData]);

//   const onPieEnter = (_, index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <>
//       <PieChart width={500} height={400}>
//         <Pie
//           activeIndex={activeIndex}
//           activeShape={renderActiveShape}
//           data={data}
//           cx="60%"
//           cy="50%"
//           innerRadius={60}
//           outerRadius={80}
//           dataKey="value"
//           onMouseEnter={onPieEnter}
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={entry.color} />
//           ))}
//         </Pie>
//       </PieChart>
//       {/* 데이터에 대한 레이블 표시 */}
//       {/* <div style={{ textAlign: 'center', marginTop: '20px' }}>
//         {data.map((entry, index) => (
//           <div key={`label-${index}`} style={{ color: entry.color }}>
//             {`${entry.name}: ${entry.value.toFixed(2)} 원`}
//           </div>
//         ))}
//       </div> */}
//       <div style={{ textAlign: "center", marginTop: "20px" }}>
//         {data.map((entry, index) => (
//           <div
//             key={`label-${index}`}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               marginBottom: "5px",
//             }}
//           >
//             {/* 정사각형 색상 박스 */}
//             <div
//               style={{
//                 width: "16px",
//                 height: "16px",
//                 backgroundColor: entry.color,
//                 marginRight: "8px",
//               }}
//             ></div>
//             {/* 데이터 레이블 */}
//             <span style={{ color: entry.color }}>
//               {`${entry.name}: ${entry.value.toFixed(2)} 원`}
//             </span>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Example;

import React, { useState, useEffect } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { Center } from "@chakra-ui/react";

const Example = ({ accountsData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [data, setData] = useState([]);

  const renderActiveShape = (props) => {
      const RADIAN = Math.PI / 180;
      const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value,
      } = props;
  useEffect(() => {
    if (accountsData && accountsData.length > 0) {
      const currenciesData = [
        {
          name: "USD",
          value: parseFloat(accountsData[1].usd) * 1316.95,
          color: "#0088FE",
        },
        {
          name: "JPY",
          value: parseFloat(accountsData[1].jpy) * 900,
          color: "#00C49F",
        },
        {
          name: "EUR",
          value: parseFloat(accountsData[1].eur) * 1508,
          color: "#FFBB28",
        },
      ];

      const filteredData = currenciesData.filter(
        (currency) => currency.value > 0
      );
      setData(filteredData);
    }
  }, [accountsData]);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <Center flexDirection="column" width="100%">
      <div style={{ width: "100%", maxWidth: "700px", height: "500px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="40%"
              outerRadius="60%"
              dataKey="value"
              onMouseEnter={onPieEnter}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      {/* 데이터 레이블 */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {data.map((entry, index) => (
          <div
            key={`label-${index}`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "5px",
            }}
          >
            <div
              style={{
                width: "16px",
                height: "16px",
                backgroundColor: entry.color,
                marginRight: "8px",
              }}
            ></div>
            <span style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value.toFixed(2)} 원`}
            </span>
          </div>
        ))}
      </div>
    </Center>
  );
};

export default Example;
