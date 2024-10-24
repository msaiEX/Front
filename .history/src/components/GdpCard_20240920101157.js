import React from "react";

const GdpCard = () => {
  return (
    <div className="flex justify-center gap-1 mt-8">
      {/* 물가 */}
      <div className="w-[160px] h-[160px] bg-gray-100 rounded-full flex flex-col justify-center items-center shadow-lg">
        <h3 className="text-2xl font-semibold">물가</h3>
        <div className="text-center mt-2">
          <div className="text-lg">
            2023 <span className="text-3xl font-bold">3.6%</span>
          </div>
          <div className="text-lg">
            2024 <span className="text-3xl font-bold">2.6%</span>
          </div>
        </div>
      </div>

      {/* GDP */}
      <div className="w-[160px] h-[160px] bg-gray-100 rounded-full flex flex-col justify-center items-center shadow-lg">
        <h3 className="text-2xl font-semibold">GDP</h3>
        <div className="text-center mt-2">
          <div className="text-lg">
            2023 <span className="text-3xl font-bold">1.3%</span>
          </div>
          <div className="text-lg">
            2024 <span className="text-3xl font-bold">2.0%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GdpCard;
