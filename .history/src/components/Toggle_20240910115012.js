import React from 'react';
import { Button, ButtonGroup, Box } from '@chakra-ui/react';

const ToggleSwitch = ({ selected, handleToggle, direction }) => {

  return (
    <Box display="flex" justifyContent={direction} alignItems="center" mt={4}>
      <ButtonGroup borderRadius="full" size="lg" spacing={0} className='bg-slate-200'>
        <Button
          onClick={handleToggle}
          // colorScheme={selected ? 'red' : 'gray'}
          className={selected ? 'bg-[#009577] text-white' : 'bg-slate-200 text-black'} // selected가 true일 때 초록색
          borderRadius="full"
          width="100px"
        >
          호재
        </Button>
        <Button
          onClick={handleToggle}
          // colorScheme={!selected ? 'red' : 'gray'}
          className={!selected ? 'bg-[#009577] text-white' : 'bg-slate-200 text-black'} // selected가 false일 때 초록색
          borderRadius="full"
          width="100px"
        >
          악재
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default ToggleSwitch;