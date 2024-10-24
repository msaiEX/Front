import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
  Text
} from "@chakra-ui/react";

import { RiQuestionFill } from "react-icons/ri";

const LevelPopover = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <div className='cursor-pointer'>
          <RiQuestionFill size={32} className='hover:bg-slate-400'/>
        </div>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          {/* <PopoverHeader>우대 정보</PopoverHeader> */}
          <Text className='flex justify-center my-2 text-lg font-semibold'>Level & Score 환율 우대율</Text>
          <PopoverCloseButton />
          <PopoverBody>
            <table
              style={{
                borderCollapse: "collapse",
                width: "100%",
                fontSize: "12px",
                border: "1px solid #ddd",
              }}
            >
              <thead>
                <tr
                  style={{
                    backgroundColor: "#f0f0f0",
                    textAlign: "center",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <th style={{ padding: "4px" }}>레벨</th>
                  <th style={{ padding: "4px" }}>스코어</th>
                  <th style={{ padding: "4px 8px" }}>환율 우대율</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  style={{
                    backgroundColor: "#f9f9f9",
                    textAlign: "center",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <td style={{ padding: "4px" }}>레벨 5</td>
                  <td style={{ padding: "4px" }}>25001 이상</td>
                  <td style={{ padding: "4px 8px" }}>
                    USD: 90% / JPY, EUR: 60% / 기타: 30%
                  </td>
                </tr>
                <tr
                  style={{
                    backgroundColor: "#f0f0f0",
                    textAlign: "center",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <td style={{ padding: "4px" }}>레벨 4</td>
                  <td style={{ padding: "4px" }}>15001 ~ 25000</td>
                  <td style={{ padding: "4px 8px" }}>
                    USD: 85% / JPY, EUR: 55% / 기타: 30%
                  </td>
                </tr>
                <tr
                  style={{
                    backgroundColor: "#f9f9f9",
                    textAlign: "center",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <td style={{ padding: "4px" }}>레벨 3</td>
                  <td style={{ padding: "4px" }}>10001 ~ 15000</td>
                  <td style={{ padding: "4px 8px" }}>
                    USD: 80% / JPY, EUR: 50% / 기타: 20%
                  </td>
                </tr>
                <tr
                  style={{
                    backgroundColor: "#f0f0f0",
                    textAlign: "center",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <td style={{ padding: "4px" }}>레벨 2</td>
                  <td style={{ padding: "4px" }}>5101 ~ 10000</td>
                  <td style={{ padding: "4px 8px" }}>
                    USD: 75% / JPY, EUR: 45% / 기타: 20%
                  </td>
                </tr>
                <tr
                  style={{
                    backgroundColor: "#f9f9f9",
                    textAlign: "center",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <td style={{ padding: "4px" }}>레벨 1</td>
                  <td style={{ padding: "4px" }}>0 ~ 5100</td>
                  <td style={{ padding: "4px 8px" }}>
                    USD: 70% / JPY, EUR: 40% / 기타: 20%
                  </td>
                </tr>
              </tbody>
            </table>
          </PopoverBody>
          {/* <PopoverFooter>추가적인 세부 내용</PopoverFooter> */}
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default LevelPopover;
