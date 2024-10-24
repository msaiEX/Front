// // BoardInput.js
// import React, { useState } from "react";
// import {
//   Textarea,
//   Button,
//   VStack,
//   FormControl,
//   FormLabel,
// } from "@chakra-ui/react";

// const BoardInput = ({ onPost }) => {
//   const [content, setContent] = useState("");

//   const handlePost = () => {
//     if (content.trim()) {
//       onPost(content);
//       setContent(""); // 게시 후 입력 내용 초기화
//     }
//   };

//   return (
//     <div className="mw-600 p-4 rounded-md bg-slate-50">
//       <VStack spacing={4}>
//         <FormControl id="content">
//           <FormLabel>내용</FormLabel>
//           <Textarea
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             placeholder="내용을 입력하세요"
//             size="md"
//             resize="vertical"
//             height="200px"
//           />
//         </FormControl>

//         <Button colorScheme="blue" onClick={handlePost} width="full">
//           게시하기
//         </Button>
//       </VStack>
//     </div>
//   );
// };

// export default BoardInput;

// BoardInput.js
import React, { useState } from "react";
import {
  Textarea,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

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
        <div>
          <FormControl id="image">
            <Input type="file" accept="image/*" onChange={handleImageChange} />
          </FormControl>

          <Button colorScheme="blue" onClick={handlePost} width="full">
            게시하기
          </Button>
        </div>
      </VStack>
    </div>
  );
};

export default BoardInput;
