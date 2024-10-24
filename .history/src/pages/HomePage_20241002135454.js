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
      <div className="absolute z-100 flex items-center p-10">
        <img
          src={process.env.PUBLIC_URL + "/image/hanalogo_white.png"}
          alt=""
        />
        <img
          className="h-[24px]"
          src={process.env.PUBLIC_URL + "/image/hanaEx_logo_white.png"}
          alt=""
        />
      </div>
      <div
        className="block mx-auto border-2 border-white rounded-md w-5 h-8 box-border absolute z-100"
        name="mouse"
      >
        <div
          className="absolute left-1/2 transform -translate-x-1/2 top-[10%] w-[0.875rem] h-[1.75rem] bg-white rounded-sm animate-[wheel_2.5s_ease-in-out_infinite]"
          name="wheel"
        ></div>
      </div>

      <div className="absolute z-100 text-slate-50 w-full">content</div>
    </div>
  );
};

export default HomePage;
