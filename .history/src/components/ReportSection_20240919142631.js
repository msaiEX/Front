import React from "react";

const ReportSection = ({ reportData, title }) => {
  return (
    <div className="px-4">
      <h2 className="text-xl font-bold">{title}</h2>
      {reportData.map((item, index) => (
        <div key={index} className="mt-4">
          <div className="flex mt-2">
            <span className="w-[24px] h-[24px] rounded-full bg-[#b7df92] text-center mr-2">
              {index + 1}
            </span>
            <p className="text-lg font-semibold">{item.title}</p>
          </div>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ReportSection;
