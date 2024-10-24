// import React, { useState } from 'react';
// import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, ComposedChart } from 'recharts';
// import { Button } from '@chakra-ui/react';
// import moment from 'moment';

// const data = [
//   { day: '2024.7.16', news: 993 },
//   { day: '2024.7.17', news: 949 },
//   { day: '2024.7.18', news: 951 },
//   { day: '2024.7.19', news: 720 },
//   { day: '2024.7.20', news: 303 },
//   { day: '2024.7.21', news: 401 },
//   { day: '2024.7.22', news: 985 },
//   { day: '2024.7.23', news: 970 },
//   { day: '2024.7.24', news: 860 },
//   { day: '2024.7.25', news: 708 },
//   { day: '2024.7.26', news: 736 },
//   { day: '2024.7.27', news: 238 },
//   { day: '2024.7.28', news: 517 },
//   { day: '2024.7.29', news: 791 },
//   { day: '2024.7.30', news: 884 },
//   { day: '2024.7.31', news: 924 },
//   { day: '2024.8.1', news: 883 },
//   { day: '2024.8.2', news: 724 },
//   { day: '2024.8.3', news: 297 },
//   { day: '2024.8.4', news: 347 },
//   { day: '2024.8.5', news: 835 },
//   { day: '2024.8.6', news: 1097 },
//   { day: '2024.8.7', news: 1151 },
//   { day: '2024.8.8', news: 838 },
//   { day: '2024.8.9', news: 650 },
//   { day: '2024.8.10', news: 241 },
//   { day: '2024.8.11', news: 310 },
//   { day: '2024.8.12', news: 827 },
//   { day: '2024.8.13', news: 735 },
//   { day: '2024.8.14', news: 776 },
//   { day: '2024.8.15', news: 456 },
//   { day: '2024.8.16', news: 144 },
//   { day: '2024.9.10', news: 682 },
//   { day: '2024.9.11', news: 795 },
//   { day: '2024.9.12', news: 910 },
//   { day: '2024.9.13', news: 845 },
//   { day: '2024.9.14', news: 631 },
//   { day: '2024.9.15', news: 712 },
//   { day: '2024.9.16', news: 943 },
//   { day: '2024.9.17', news: 1071 },
//   { day: '2024.9.18', news: 887 },
//   { day: '2024.9.19', news: 760 },
//   { day: '2024.9.20', news: 815 },
//   { day: '2024.9.21', news: 690 },
//   { day: '2024.9.22', news: 502 },
//   { day: '2024.9.23', news: 724 },
//   { day: '2024.9.24', news: 894 },
//   { day: '2024.9.25', news: 715 },
//   { day: '2024.9.26', news: 740 },
//   { day: '2024.9.27', news: 835 },
//   { day: '2024.9.28', news: 512 },
//   { day: '2024.9.29', news: 640 },
//   { day: '2024.9.30', news: 970 },
//   { day: '2024.10.1', news: 920 },
//   { day: '2024.10.2', news: 1045 },
//   { day: '2024.10.3', news: 1150 },
//   { day: '2024.10.4', news: 985 },
//   { day: '2024.10.5', news: 890 },
//   { day: '2024.10.6', news: 1020 },
//   { day: '2024.10.7', news: 800 },
//   { day: '2024.10.8', news: 910 },
//   { day: '2024.10.9', news: 750 },
//   { day: '2024.10.10', news: 930 },
// ];

// const filterData = (data, view) => {
//   if (view === 'daily') {
//     return data;
//   } else if (view === 'weekly') {
//     const weeklyData = [];
//     data.reduce((acc, curr, index) => {
//       const weekStart = moment(curr.day, 'YYYY.M.D').startOf('week').format('YYYY.MM.DD');
//       if (!acc[weekStart]) {
//         acc[weekStart] = { day: `Week of ${weekStart}`, news: 0 };
//         weeklyData.push(acc[weekStart]);
//       }
//       acc[weekStart].news += curr.news;
//       return acc;
//     }, {});
//     return weeklyData;
//   } else if (view === 'monthly') {
//     const monthlyData = [];
//     data.reduce((acc, curr) => {
//       const month = moment(curr.day, 'YYYY.M.D').format('YYYY.MM');
//       if (!acc[month]) {
//         acc[month] = { day: month, news: 0 };
//         monthlyData.push(acc[month]);
//       }
//       acc[month].news += curr.news;
//       return acc;
//     }, {});
//     return monthlyData;
//   }
// };

// const NewsBarChart = () => {
//   const [view, setView] = useState('daily');

//   const handleViewChange = (newView) => {
//     setView(newView);
//   };

//   const filteredData = filterData(data, view);

//   return (
//     <div>
//       <div className='flex justify-end mb-2'>
//         <Button onClick={() => handleViewChange('daily')} style={{ marginRight: '10px' }}>
//           일간 보기
//         </Button>
//         <Button onClick={() => handleViewChange('weekly')} style={{ marginRight: '10px' }}>
//           주간 보기
//         </Button>
//         <Button onClick={() => handleViewChange('monthly')}>
//           월간 보기
//         </Button>
//       </div>
//       <ResponsiveContainer width={800} height={200}>
//         <ComposedChart
//           data={filteredData}
//           margin={{
//             top: 20, right: 30, left: 20, bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="day" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Area type="monotone" dataKey="news" stroke="#82ca9d" fill="#82ca9d" dot={{ stroke: '#2ca02c', strokeWidth: 3 }} />
//           <Bar dataKey="news" fill="#8884d8" />
//         </ComposedChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default NewsBarChart;
import React, { useState } from 'react';
import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, ComposedChart } from 'recharts';
import { Button } from '@chakra-ui/react';
import moment from 'moment';

const data = [
  { day: '2024.7.16', news: 993 },
  { day: '2024.7.17', news: 949 },
  { day: '2024.7.18', news: 951 },
  { day: '2024.7.19', news: 720 },
  { day: '2024.7.20', news: 303 },
  { day: '2024.7.21', news: 401 },
  { day: '2024.7.22', news: 985 },
  { day: '2024.7.23', news: 970 },
  { day: '2024.7.24', news: 860 },
  { day: '2024.7.25', news: 708 },
  { day: '2024.7.26', news: 736 },
  { day: '2024.7.27', news: 238 },
  { day: '2024.7.28', news: 517 },
  { day: '2024.7.29', news: 791 },
  { day: '2024.7.30', news: 884 },
  { day: '2024.7.31', news: 924 },
  { day: '2024.8.1', news: 883 },
  { day: '2024.8.2', news: 724 },
  { day: '2024.8.3', news: 297 },
  { day: '2024.8.4', news: 347 },
  { day: '2024.8.5', news: 835 },
  { day: '2024.8.6', news: 1097 },
  { day: '2024.8.7', news: 1151 },
  { day: '2024.8.8', news: 838 },
  { day: '2024.8.9', news: 650 },
  { day: '2024.8.10', news: 241 },
  { day: '2024.8.11', news: 310 },
  { day: '2024.8.12', news: 827 },
  { day: '2024.8.13', news: 735 },
  { day: '2024.8.14', news: 776 },
  { day: '2024.8.15', news: 456 },
  { day: '2024.8.16', news: 144 },
  { day: '2024.9.10', news: 682 },
  { day: '2024.9.11', news: 795 },
  { day: '2024.9.12', news: 910 },
  { day: '2024.9.13', news: 845 },
  { day: '2024.9.14', news: 631 },
  { day: '2024.9.15', news: 712 },
  { day: '2024.9.16', news: 943 },
  { day: '2024.9.17', news: 1071 },
  { day: '2024.9.18', news: 887 },
  { day: '2024.9.19', news: 760 },
  { day: '2024.9.20', news: 815 },
  { day: '2024.9.21', news: 690 },
  { day: '2024.9.22', news: 502 },
  { day: '2024.9.23', news: 724 },
  { day: '2024.9.24', news: 894 },
  { day: '2024.9.25', news: 715 },
  { day: '2024.9.26', news: 740 },
  { day: '2024.9.27', news: 835 },
  { day: '2024.9.28', news: 512 },
  { day: '2024.9.29', news: 640 },
  { day: '2024.9.30', news: 970 },
  { day: '2024.10.1', news: 920 },
  { day: '2024.10.2', news: 1045 },
  { day: '2024.10.3', news: 1150 },
  { day: '2024.10.4', news: 985 },
  { day: '2024.10.5', news: 890 },
  { day: '2024.10.6', news: 1020 },
  { day: '2024.10.7', news: 800 },
  { day: '2024.10.8', news: 910 },
  { day: '2024.10.9', news: 750 },
  { day: '2024.10.10', news: 930 },
];

const filterData = (data, view) => {
  if (view === 'daily') {
    return data;
  } else if (view === 'weekly') {
    const weeklyData = [];
    data.reduce((acc, curr, index) => {
      const weekStart = moment(curr.day, 'YYYY.M.D').startOf('week').format('YYYY.MM.DD');
      if (!acc[weekStart]) {
        acc[weekStart] = { day: `Week of ${weekStart}`, news: 0 };
        weeklyData.push(acc[weekStart]);
      }
      acc[weekStart].news += curr.news;
      return acc;
    }, {});
    return weeklyData;
  } else if (view === 'monthly') {
    const monthlyData = [];
    data.reduce((acc, curr) => {
      const month = moment(curr.day, 'YYYY.M.D').format('YYYY.MM');
      if (!acc[month]) {
        acc[month] = { day: month, news: 0 };
        monthlyData.push(acc[month]);
      }
      acc[month].news += curr.news;
      return acc;
    }, {});
    return monthlyData;
  }
};

const NewsBarChart = () => {
  const [view, setView] = useState('daily');

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const filteredData = filterData(data, view);

  return (
    <div>
      <div className='flex justify-end mb-2'>
        <Button onClick={() => handleViewChange('daily')} style={{ marginRight: '10px' }}>
          일간 보기
        </Button>
        <Button onClick={() => handleViewChange('weekly')} style={{ marginRight: '10px' }}>
          주간 보기
        </Button>
        <Button onClick={() => handleViewChange('monthly')}>
          월간 보기
        </Button>
      </div>
      <ResponsiveContainer width={800} height={200}>
        <ComposedChart
          data={filteredData}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend formatter={() => "언급량"} /> {/* Legend의 이름을 '언급량'으로 변경 */}
          <Area type="monotone" dataKey="news" stroke="#82ca9d" fill="#82ca9d" dot={{ stroke: '#2ca02c', strokeWidth: 3 }} hide /> {/* Area Chart Legend 숨기기 */}
          <Bar dataKey="news" fill="#8884d8" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default NewsBarChart;
