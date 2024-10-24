// NewBoard.js
import React, {useState} from 'react';
import { Text, Image } from "@chakra-ui/react";
import { IoIosHeart } from "react-icons/io";

const NewBoard = ({ boardname, boardtext, profile, boardImage }) => {
  const [likeCount, setLikeCount] = useState(0); // 좋아요 카운트 상태 관리
    // 좋아요 버튼을 클릭할 때 호출될 함수
    const handleLikeClick = () => {
      setLikeCount(likeCount + 1); // 클릭할 때마다 카운트를 증가시킴
    };
  return (
    <div className='p-4 bg-white rounded-lg my-4 '>
      <div className='flex items-center gap-2 mb-4'>
        <Image
          src={profile}
          className='object-cover rounded-full w-6 h-6'
        >

        </Image>
        <Text>{boardname}</Text>
      </div>
      <div className='bg-green-50 rounded-lg p-4'>
        <Text>{boardtext}</Text>
        <div>
          {boardImage && <Image src={boardImage} alt="게시된 이미지" className='w-12 h-12 rounded-md' />}
        </div>
      </div>
      <div className='flex mt-2 text-slate-600 items-center'>
        {/* IoIosHeart 아이콘을 클릭할 때 handleLikeClick 함수가 호출됨 */}
        <IoIosHeart size={20} onClick={handleLikeClick} style={{ cursor: 'pointer' }} />
        {/* 좋아요 카운트를 표시하는 부분 */}
        <div name='count' className='ml-2'>{likeCount}</div>
      </div>
      <div className='border border-slate-50 mt-2'></div>
    </div>
  );
};

export default NewBoard;
