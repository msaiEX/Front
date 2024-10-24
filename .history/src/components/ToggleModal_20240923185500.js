import React from 'react';

const ToggleModal = ({ selected, handleToggle, direction }) => {
  return (

    <div className='flex justify-center items-center'>
      <div name='button-group' className='flex rounded-md bg-slate-300'>
        <div name='button-right' onClick={handleToggle} className={`w-[100px] py-2 text-center rounded-md ${selected ? 'border-2 border-red-500 text-red-500 bg-white' : 'bg-gray-300 text-black'}`}>살래요</div>
        <div name='button-left' onClick={handleToggle} className={`w-[100px] py-2 text-center rounded-md ${!selected ? 'border-2 border-blue-500 text-blue-500 bg-white' : 'bg-gray-300 text-black'}`}>팔래요</div>
      </div>
    </div>
  );
};

export default ToggleModal;