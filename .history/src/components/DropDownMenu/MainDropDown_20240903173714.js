import React from "react";
import {
  Button,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { countryMapperFunction } from '../../data/countryMapper';


const MainDropDown = ({ setChangeState }) => {

  const handleItemClick = (currency) => {
    setChangeState(currency);
  };


  return (
    <Menu>
      <MenuButton as={Button}>
        <div className="flex items-center">
          <Image
            boxSize="2rem"
            borderRadius="full"
            src={countryMapperFunction("USD").image}
            alt="Fluffybuns the destroyer"
            mr="12px"
          />
          <div>미국 USD</div>
        </div>
      </MenuButton>
      <MenuList>
        <MenuItem minH="48px" onClick={() => handleItemClick("USD")}>
          <Image
            boxSize="2rem"
            borderRadius="full"
            src="https://placekitten.com/100/100"
            alt="Fluffybuns the destroyer"
            mr="12px"
          />
          <span name="usd">미국 USD</span>
        </MenuItem>
        <MenuItem minH="40px" onClick={() => handleItemClick("JPY")}>
          <Image
            boxSize="2rem"
            borderRadius="full"
            src="https://placekitten.com/120/120"
            alt="Simon the pensive"
            mr="12px"
          />
          <span name="jpy">일본 JPY</span>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MainDropDown;
