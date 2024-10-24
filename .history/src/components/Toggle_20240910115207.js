import React from "react";
import { Button, ButtonGroup, Box } from "@chakra-ui/react";

const ToggleSwitch = ({ selected, handleToggle, direction }) => {
  return (
    //   <Box display="flex" justifyContent={direction} alignItems="center" mt={4}>
    //     <ButtonGroup borderRadius="full" size="lg" spacing={0} className='bg-slate-200'>
    //       <Button
    //         onClick={handleToggle}
    //         // colorScheme={selected ? 'red' : 'gray'}
    //         className={selected ? 'bg-[#009577] text-white' : 'bg-slate-200 text-black'} // selected가 true일 때 초록색
    //         borderRadius="full"
    //         width="100px"
    //       >
    //         호재
    //       </Button>
    //       <Button
    //         onClick={handleToggle}
    //         // colorScheme={!selected ? 'red' : 'gray'}
    //         className={!selected ? 'bg-[#009577] text-white' : 'bg-slate-200 text-black'} // selected가 false일 때 초록색
    //         borderRadius="full"
    //         width="100px"
    //       >
    //         악재
    //       </Button>
    //     </ButtonGroup>
    //   </Box>
    <div
      style={{
        display: "flex",
        justifyContent: direction,
        alignItems: "center",
        marginTop: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          borderRadius: "9999px",
          backgroundColor: "#E2E8F0",
        }}
      >
        <button
          onClick={handleToggle}
          className={
            selected ? "bg-[#009577] text-white" : "bg-slate-200 text-black"
          }
          style={{
            borderRadius: "9999px",
            width: "100px",
            padding: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          호재
        </button>
        <button
          onClick={handleToggle}
          className={
            !selected ? "bg-[#009577] text-white" : "bg-slate-200 text-black"
          }
          style={{
            borderRadius: "9999px",
            width: "100px",
            padding: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          악재
        </button>
      </div>
    </div>
  );
};

export default ToggleSwitch;
