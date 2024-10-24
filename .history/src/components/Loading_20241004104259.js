import React from "react";
// import 'animate.css';
const Loading = () => {
  return (
    <div className='w-screen h-screen bg-black opacity-40 flex justify-center items-center absolute left-0 z-50'>
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
          .my-element {
            display: inline-block;
            margin: 0 0.5rem;

            animation: bounce; /* referring directly to the animation's @keyframe declaration */
            animation-duration: 2s; /* don't forget to set a duration! */
          }
            @keyframes bblFadInOut {
            0%, 80%, 100% { box-shadow: 0 2.5em 0 -1.3em }
            40% { box-shadow: 0 2.5em 0 0 }
          }
        `}
      </style>
      <div class="circle" className='h-9 w-9 bg-slate-500'> </div>
      <span className="loader"></span>
    </div>
  );
};

export default Loading;

