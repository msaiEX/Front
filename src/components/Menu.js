import React from "react";
import { Text } from "@chakra-ui/react";

const Menu = ({ menu_name }) => {
  return (
    <div className="w-[120px] text-center rounded-full text-slate-800 leading-10 hover:bg-sky-500 hover:text-slate-50 transition duration-150 ease-in-out">
      <Text className="font-normal">{menu_name}</Text>
    </div>
  );
};

export default Menu;
