import React from "react";

const ToggleSwitch = ({ selected, handleToggle, direction }) => {
  return (
    <div
      className={`flex justify-${direction} items-center mt-4`}
    >
      <div className="relative flex w-52 h-10 bg-gray-200 rounded-full">
        {/* 이동하는 애니메이션을 위한 이동 블록 */}
        <div
          className={`absolute w-1/2 h-full bg-[#009577] rounded-full transform transition-transform duration-400 ease-in-out ${
            selected ? "translate-x-0" : "translate-x-full"
          }`}
        ></div>

        <button
          onClick={handleToggle}
          className={`z-10 w-1/2 h-full rounded-full transition-colors duration-400 ${
            selected ? "text-white" : "text-black"
          }`}
        >
          호재
        </button>
        <button
          onClick={handleToggle}
          className={`z-10 w-1/2 h-full rounded-full transition-colors duration-400 ${
            !selected ? "text-white" : "text-black"
          }`}
        >
          악재
        </button>
      </div>
    </div>
  );
};

export default ToggleSwitch;
