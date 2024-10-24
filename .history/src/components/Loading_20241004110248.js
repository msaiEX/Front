import React from "react";
import {
  Image,
} from "@chakra-ui/react";
// import 'animate.css';
const Loading = () => {
  return (
    <>
    <div className="w-screen h-screen flex justify-center items-center absolute left-0 z-30 bg-black opacity-40">
    </div>
    <div className='w-screen h-screen flex justify-center items-center absolute left-0 z-40'>
      <style>
        {`
          .loader, .loader:before, .loader:after {
            border-radius: 50%;
            width: 2.5em;
            height: 2.5em;
            animation-fill-mode: both;
            animation: bblFadInOut 1.8s infinite ease-in-out;
          }
          .loader {
            color: #FFF;
            font-size: 7px;
            position: relative;
            text-indent: -9999em;
            transform: translateZ(0);
            animation-delay: -0.16s;
          }
          .loader:before,
          .loader:after {
            content: '';
            position: absolute;
            top: 0;
          }
          .loader:before {
            left: -3.5em;
            animation-delay: -0.32s;
          }
          .loader:after {
            left: 3.5em;
          }
            @keyframes bblFadInOut {
            0%, 80%, 100% { box-shadow: 0 2.5em 0 -1.3em }
            40% { box-shadow: 0 2.5em 0 0 }
          }
          .circle {
            animation: bounce 1s infinite;
          }
          @keyframes bounce {
            0% {
              top: 40px;
            }
            50% {
              top: 120px;
              height: 40px;
            }
            55% {
              top: 150px;
              height: 25px;
            }
            65% {
              top: 120px;
              height: 40px;
            }
            95% {
            top: 40px;
            }
            100% {
              top: 40px;
            }
          }
        `}
      </style>
      <div className="flex flex-col items-center">
        <div className='h-20 w-20'>
        
          <Image 
            className="circle h-12 w-12 p-3 opacity-100 bg-slate-500 rounded-full"
            src='/image/star_bot.png'  
          ></Image>
        </div>
        <div className="loader"></div>
      </div>
    </div>
    </>
  );
};

export default Loading;
