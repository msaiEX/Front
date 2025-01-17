// NewBoard.js
import React from 'react';
import { Text, Image } from "@chakra-ui/react";
import { IoIosHeart } from "react-icons/io";

const NewBoard = ({ boardtext, boardImage }) => {
  return (
    <div className='p-4 bg-white rounded-lg my-4 '>
      <div className='flex items-center gap-2 mb-4'>
        <Image
          src='/image/user1.png'
          className='object-cover rounded-full w-6 h-6'
        >

        </Image>
        <Text>양하나</Text>
      </div>
      <div className='bg-green-50 rounded-lg px-2 py-2'>
        <Text>{boardtext}</Text>
        <div>
          {boardImage && <Image src={boardImage} alt="게시된 이미지" className='w-12 h-12 rounded-md' />}
        </div>
      </div>
      <div className='flex mt-2'>
        <IoIosHeart />
      </div>
      
    </div>
  );
};

export default NewBoard;
