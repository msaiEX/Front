import React from "react";

const HomePage = () => {
  return (
    <div className="relative">
      <img
        className="fixed w-full h-screen"
        src={process.env.PUBLIC_URL + "/image/homepage_bg.jpg"}
        alt=""
      />
      <div className="fixed w-full h-screen bg-black opacity-30 top-0 left-0"></div>
      <img src="/image/hanalogo_white" alt="" />
      <div className='absolute z-100 text-slate-50 w-full'>content</div>
    </div>
  );
};

export default HomePage;
