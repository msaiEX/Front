// import React from "react";
// import { Text, Image } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// const NewsBar = ({ state, result, url, title, content, imageUrl }) => {
//   // result 값에 따라 동적으로 색상 설정
//   const resultColor = result === "호재" ? "red.500" : "blue.500";
//   function truncateText(text, maxLength = 50) {
//     if (text.length > maxLength) {
//       return text.slice(0, maxLength) + "...";
//     }
//     return text;
//   }


//   return (
  
//     <Link 
//       to={"/NewsPageDetail/" + encodeURIComponent(url)}
//     >
//     <div className='w-[880px] h-[104px] flex justify-center py-2 px-10 mb-4 rounded-2xl bg-[#eff6f3] transition-all duration-100 ease-in-out hover:border hover:border-green-500'
//       style={{boxSizing: 'border-box'}}
//     >
//       <div className="w-[790px] flex justify-between items-center gap-3">
//         {/* text box */}
//         <div name="textbox">
//           <div className="flex gap-1 mt-1">
//             <Text className='text-sm font-bold'>{state}/KRW</Text>
//             <Text className='text-sm font-bold' color={resultColor}>{result}</Text>
//           </div>
//           <Text className='text-sm mt-1'>{title}</Text>
//           <Text className='text-xs mt-1 text-slate-600'>
//           {truncateText(content)}
//           </Text>
//           <Text className='text-xs mt-1 text-slate-600'>매일경제</Text>
//         </div>
//         <div className='w-[68px] h-[68px] bg-white'>
//           <Image
//             src={imageUrl}
//             className="w-[68px] h-[68px] rounded-2xl"
//           ></Image>
//         </div>
//       </div>
//     </div>
//     </Link>
//   );
// };

// export default NewsBar;
import React from "react";
import { Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NewsBar = ({ state, result, url, title, content, imageUrl }) => {
  const resultColor = result === "호재" ? "red.500" : "blue.500";

  function truncateText(text, maxLength = 50) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }

  return (
    <>
      <style>
        {`
          @keyframes fadein {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .fadein {
            animation: fadein 0.5s ease-in-out forwards;
          }
        `}
      </style>

      <Link to={"/NewsPageDetail/" + encodeURIComponent(url)}>
        <div
          className="w-full flex justify-center py-2 px-10 mb-4 rounded-2xl bg-[#eff6f3] transition-all duration-500 ease-in-out fadein hover:border hover:border-green-500"
        >
          <div className="w-full flex justify-between items-center gap-3">
            {/* text box */}
            <div name="textbox">
              <div className="flex gap-1 mt-1">
                <Text className="text-sm font-bold">{state}/KRW</Text>
                <Text className="text-sm font-bold" color={resultColor}>
                  {result}
                </Text>
              </div>
              <Text className="text-sm mt-1">{title}</Text>
              <Text className="text-xs mt-1 text-slate-600">
                {truncateText(content)}
              </Text>
              <Text className="text-xs mt-1 text-slate-600">매일경제</Text>
            </div>
            <div className="w-[68px] h-[68px] bg-white">
              <Image
                src={imageUrl}
                className="w-[68px] h-[68px] rounded-2xl"
              ></Image>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default NewsBar;
