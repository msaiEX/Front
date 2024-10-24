// NewBoard.js
import React from 'react';
import { Text, Image } from "@chakra-ui/react";

const NewBoard = ({ boardtext, boardImage }) => {
  return (
    <div className='p-4 bg-white rounded-lg my-4 '>
      <div className='flex items-center gap-2 mb-4'>
        <Image
          src='/image/user1.png'
          className='rounded-full'
        >

        </Image>
        <Text>성창민짱</Text>
      </div>
      <Text>{boardtext}</Text>
      <div>
        {boardImage && <Image src={boardImage} alt="게시된 이미지" className='w-12 h-12 rounded-md' />}
      </div>
    </div>
  );
};

export default NewBoard;
