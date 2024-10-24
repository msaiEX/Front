import React from "react";
import { 
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
} from '@chakra-ui/react'

const ExChangeInput = ({ value, setValue, changeState }) => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
        $
      </InputLeftElement>
      <Input 
        value={value}
        onChange={(e) => setValue(e.target.value)} // 입력 값 변경 시 상태 업데이트
        placeholder="원하시는 금액을 입력하세요" 
      />
      <InputRightElement>
        {changeState}
      </InputRightElement>
    </InputGroup>
  );
};

export default ExChangeInput;

