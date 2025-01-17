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
      <div className='absolute z-100 flex items-center'>
        <img src={process.env.PUBLIC_URL + "/image/hanalogo_white.png"} alt="" />
        <img className='h-[24px]' src={process.env.PUBLIC_URL + "/image/hanaEx_logo_white.png"} alt="" />
      </div>
      
      <div className='absolute z-100 text-slate-50 w-full'>content</div>
    </div>
  );
};

export default HomePage;
