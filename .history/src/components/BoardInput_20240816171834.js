import React, { useState } from "react";
import {
  Box,
  Textarea,
  Button,
  Input,
  VStack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import NewBoard from "./NewBoard";

const BoardInput = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlePost = () => {
    // 게시글을 작성할 때의 로직을 여기에 추가합니다.
    // 예: 서버에 게시글을 보내거나, 상태를 초기화하는 등
    console.log("Title:", title);
    console.log("Content:", content);

    // 예시로 입력 내용을 초기화합니다.
    setTitle("");
    setContent("");
  };

  return (
    <>
      <Box
        maxWidth="600px"
        margin="0 auto"
        padding="4"
        boxShadow="md"
        borderRadius="md"
        bg="white"
      >
        <VStack spacing={4}>
          <FormControl id="content">
            <FormLabel>내용</FormLabel>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력하세요"
              size="md"
              resize="vertical"
              height="200px"
            />
          </FormControl>

          <Button colorScheme="blue" onClick={handlePost} width="full">
            게시하기
          </Button>
        </VStack>
      </Box>
    </>
  );
};

export default BoardInput;
