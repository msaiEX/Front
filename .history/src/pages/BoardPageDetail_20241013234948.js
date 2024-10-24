// BoardPageDetail.js
import React, { useState } from "react";
import BoardInput from "../components/BoardInput";
import { Image, Text } from '@chakra-ui/react';
import NewBoard from "../components/NewBoard";
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

const BoardPageDetail = () => {
  const [boards, setBoards] = useState([
    { name: "김하나", content: "요즘 원달러 너무 떨어지네요...", profile: "/image/user2.png" },
    { name: "박하나", content: "최근 악재가 많아서 추매하지면 안돼요!", profile: "/image/user3.png" }
  ]);

  const handlePost = (newBoard) => {
    setBoards((prevBoards) => {
      if (prevBoards.length >= 2) {
        // boards 배열의 길이가 2개 이상일 경우 기본 게시물 추가
        return [
          ...prevBoards,
          {
            ...newBoard,
            name: "양하나",
            profile: "/image/user1.png",
          }
        ];
      } else {
        // boards 배열의 길이가 2개 미만일 경우 사용자가 추가한 게시물 추가
        return [
          ...prevBoards,
          newBoard
        ];
      }
    });
  };
  console.log(boards)
  return (
    <div className="w-[960px] flex py-1 px-10 mt-10">
      <div className='w-72 mr-6'>
        <Image className='rounded-lg' src='/image/board_image.png'/>
        <Text className='font-semibold text-xl mb-1'>원달러 투자자들 모여라</Text>
        <Text className='text-sm mb-2'>831명 활동중</Text>
        <AvatarGroup size='sm' max={3}>
          <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
          <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
          <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
          <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
          <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
        </AvatarGroup>
      </div>
      <div name="container" className='w-full px-2 bg-white rounded-lg' style={{boxShadow: "0 2px 11px rgba(0, 0, 0, 0.1)"}}>
        {boards.map((board, index) => (
          <NewBoard key={index} len={boards.length} board={board.name} boardtext={board.content} profile={board.profile} boardImage={board.image} />
        ))}
        <BoardInput onPost={handlePost} />
      </div>
    </div>
  );
};

export default BoardPageDetail;
