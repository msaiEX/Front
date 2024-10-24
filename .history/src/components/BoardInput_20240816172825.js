// BoardInput.js
import React, { useState } from "react";
import {
  Box,
  Textarea,
  Button,
  VStack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const BoardInput = ({ onPost }) => {
  const [content, setContent] = useState("");

  const handlePost = () => {
    if (content.trim()) {
      onPost(content);
      setContent(""); // 게시 후 입력 내용 초기화
    }
  };

  return (
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
  );
};

export default BoardInput;
