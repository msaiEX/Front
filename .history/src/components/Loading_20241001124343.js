import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-3">
        <span className="inline-block w-5 h-5 rounded-full bg-crimson animate-loading delay-0"></span>
        <span className="inline-block w-5 h-5 rounded-full bg-dodgerblue animate-loading delay-200"></span>
        <span className="inline-block w-5 h-5 rounded-full bg-royalblue animate-loading delay-400"></span>
      </div>
    </div>
  );
};

export default Loading;
