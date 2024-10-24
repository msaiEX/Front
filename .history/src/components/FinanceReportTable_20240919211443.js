import React from "react";
import {
  Text
} from "@chakra-ui/react";
const FinanceReportTable = () => {
  return (
    <div className="overflow-x-auto mx-4 mt-4">
      <table className="table-auto w-full border border-gray-300 text-center">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2">항목</th>
            <th className="border border-gray-300 px-4 py-2">2022년</th>
            <th className="border border-gray-300 px-4 py-2">2023년 상반기</th>
            <th className="border border-gray-300 px-4 py-2">2023년 하반기</th>
            <th className="border border-gray-300 px-4 py-2">2024년 연간</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              금리 (국고채 3년, %)
            </td>
            <td className="border border-gray-300 px-4 py-2">3.18</td>
            <td className="border border-gray-300 px-4 py-2">3.42</td>
            <td className="border border-gray-300 px-4 py-2">3.81</td>
            <td className="border border-gray-300 px-4 py-2">3.51</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              달러/원 환율 (평균, 원)
            </td>
            <td className="border border-gray-300 px-4 py-2">1,292</td>
            <td className="border border-gray-300 px-4 py-2">1,296</td>
            <td className="border border-gray-300 px-4 py-2">1,315</td>
            <td className="border border-gray-300 px-4 py-2">1,275</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">GDP (%)</td>
            <td className="border border-gray-300 px-4 py-2">2.6</td>
            <td className="border border-gray-300 px-4 py-2">0.9</td>
            <td className="border border-gray-300 px-4 py-2">1.6</td>
            <td className="border border-gray-300 px-4 py-2">2.0</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              소비자물가 (% 전년대비)
            </td>
            <td className="border border-gray-300 px-4 py-2">5.1</td>
            <td className="border border-gray-300 px-4 py-2">4.0</td>
            <td className="border border-gray-300 px-4 py-2">3.3</td>
            <td className="border border-gray-300 px-4 py-2">2.6</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              경상수지 (억달러)
            </td>
            <td className="border border-gray-300 px-4 py-2">298</td>
            <td className="border border-gray-300 px-4 py-2">24</td>
            <td className="border border-gray-300 px-4 py-2">236</td>
            <td className="border border-gray-300 px-4 py-2">450</td>
          </tr>
        </tbody>
      </table>
      <Text className='text-slate-500 text-sm'>자료 : 하나은행, 하나금융경제연구소</Text>
    </div>
  );
};

export default FinanceReportTable;
