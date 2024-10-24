// BoardInput.js
import React, { useState } from "react";
import {
  Textarea,
  Button,
  VStack,
  FormControl,
  FormLabel,
  IconButton,
} from "@chakra-ui/react";

import { FaImage } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
const BoardInput = ({ onPost }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handlePost = () => {
    if (content.trim() || image) {
      onPost({ content, image });
      setContent(""); // 게시 후 입력 내용 초기화
      setImage(null); // 이미지 초기화
    }
  };

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0])); // 이미지 미리보기용 URL 생성
  };

  return (
    <div className="mw-600 p-4 rounded-md bg-slate-50">
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
        <div className="w-full flex justify-start">
          <FormControl id="image">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
              id="file-input"
            />
            <label htmlFor="file-input">
              <IconButton
                as="span"
                icon={<FaImage />}
                aria-label="이미지 업로드"
                cursor="pointer"
              />
            </label>
          </FormControl>
          <Button onClick={handlePost} width="full">
          <FaPen />
          </Button>
        </div>
      </VStack>
    </div>
  );
};

export default BoardInput;
