import React from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

const WonInput = ({ selected, format, parse, wonValue, setWonValue, vendWonValue, setVendWonValue }) => {
  const value = selected ? wonValue : vendWonValue;
  const setValue = selected ? setWonValue : setVendWonValue;

  const handleChange = (valueString) => {
    const parsedValue = parseFloat(parse(valueString));
    setValue(isNaN(parsedValue) ? 0 : parsedValue);
  };

  return (
    <NumberInput
      onChange={handleChange}
      value={format(value)}
      step={0.01}
      min={0} // 음수 입력 방지
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default WonInput;
