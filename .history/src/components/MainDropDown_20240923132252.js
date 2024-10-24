import React from "react";
import {
  Button,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { countryMapperFunction } from '../data/countryMapper';


const MainDropDown = ({ setChangeState, changeState  }) => {

  const handleItemClick = (currency) => {
    setChangeState(currency);
  };

  return (
    <Menu bg='white'>
      <MenuButton bg='white' as={Button}>
        <div className="flex items-center">
          <Image
            boxSize="2rem"
            borderRadius="full"
            src={countryMapperFunction(changeState).image}
            alt="Fluffybuns the destroyer"
            mr="12px"
          />
          <div>{ changeState }</div>
          <Icon as={ChevronDownIcon} w={6} h={6} ml="8px" />
        </div>
      </MenuButton>
      <MenuList >
        <MenuItem minH="48px" onClick={() => handleItemClick("USD")}>
          <Image
            boxSize="2rem"
            borderRadius="full"
            src="/image/usd_flag.png"
            alt="Fluffybuns the destroyer"
            mr="12px"
          />
          <span name="usd">미국 USD</span>
        </MenuItem>
        <MenuItem minH="40px" onClick={() => handleItemClick("JPY")}>
          <Image
            boxSize="2rem"
            borderRadius="full"
            src="/image/jpy_flag.png"
            alt="Simon the pensive"
            mr="12px"
          />
          <span name="jpy">일본 JPY</span>
        </MenuItem>
        <MenuItem minH="48px" onClick={() => handleItemClick("CNY")}>
          <Image
            boxSize="2rem"
            borderRadius="full"
            src="/image/china_flag.png"
            alt="Fluffybuns the destroyer"
            mr="12px"
          />
          <span name="cny">중국 CNY</span>
        </MenuItem>
        <MenuItem minH="48px" onClick={() => handleItemClick("EUR")}>
          <Image
            boxSize="2rem"
            borderRadius="full"
            src="/image/eu_flag.png"
            alt="Fluffybuns the destroyer"
            mr="12px"
          />
          <span name="eur">미국 USD</span>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MainDropDown;
